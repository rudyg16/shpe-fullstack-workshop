import kagglehub
from kagglehub import KaggleDatasetAdapter
import pandas as pd
import sqlite3

# Load the dataset
df = kagglehub.dataset_load(
    KaggleDatasetAdapter.PANDAS,
    "muhammadehsan02/us-stock-market-and-commodities-data-2020-2024",
    "US_Stock_Data.csv",
)

# --- Clean numeric fields (remove commas, convert to numbers) ---
for col in df.columns:
    if col not in ["Date", "Unnamed: 0"]:  # skip non-numeric
        df[col] = (
            df[col]
            .astype(str)
            .str.replace(",", "", regex=False)
        )
        df[col] = pd.to_numeric(df[col], errors="coerce")

# --- Normalize the Date column to YYYY-MM-DD ---
df["Date"] = pd.to_datetime(df["Date"], dayfirst=True, errors="coerce")
df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")

# --- Mapping: dataset column → (price, volume, symbol, category) ---
mapping = {
    "Apple": ("Apple_Price", "Apple_Vol.", "AAPL", "STK"),
    "Tesla": ("Tesla_Price", "Tesla_Vol.", "TSLA", "STK"),
    "Microsoft": ("Microsoft_Price", "Microsoft_Vol.", "MSFT", "STK"),
    "Google": ("Google_Price", "Google_Vol.", "GOOGL", "STK"),
    "Nvidia": ("Nvidia_Price", "Nvidia_Vol.", "NVDA", "STK"),
    "Netflix": ("Netflix_Price", "Netflix_Vol.", "NFLX", "STK"),
    "Amazon": ("Amazon_Price", "Amazon_Vol.", "AMZN", "STK"),
    "Meta": ("Meta_Price", "Meta_Vol.", "META", "STK"),
    "Berkshire": ("Berkshire_Price", "Berkshire_Vol.", "BRK.A", "STK"),
    "S&P 500": ("S&P_500_Price", None, "^GSPC", "IDX"),
    "Nasdaq 100": ("Nasdaq_100_Price", "Nasdaq_100_Vol.", "^NDX", "IDX"),
    "Bitcoin": ("Bitcoin_Price", "Bitcoin_Vol.", "BTC", "CRY"),
    "Ethereum": ("Ethereum_Price", "Ethereum_Vol.", "ETH", "CRY"),
    "Gold": ("Gold_Price", "Gold_Vol.", "XAUUSD", "CMD"),
    "Crude Oil": ("Crude_oil_Price", "Crude_oil_Vol.", "CL", "CMD"),
    "Natural Gas": ("Natural_Gas_Price", "Natural_Gas_Vol.", "NG", "CMD"),
    "Copper": ("Copper_Price", "Copper_Vol.", "HG", "CMD"),
    "Silver": ("Silver_Price", "Silver_Vol.", "SI", "CMD"),
    "Platinum": ("Platinum_Price", "Platinum_Vol.", "PL", "CMD"),
}

# --- Insert into SQLite ---
conn = sqlite3.connect("market.db")
cursor = conn.cursor()

for _, row in df.iterrows():
    date = row["Date"]

    for name, (price_col, vol_col, symbol, cat) in mapping.items():
        price = row[price_col]
        volume = row[vol_col] if vol_col and vol_col in row else None

        if pd.isna(price):  # skip if no price
            continue

        cursor.execute("""
        INSERT OR IGNORE INTO assets (name, symbol, cat, date, price, volume)
        VALUES (?, ?, ?, ?, ?, ?)
        """, (name, symbol, cat, date, float(price), int(volume) if pd.notna(volume) else None))

conn.commit()
conn.close()

print("✅ Insert complete")
