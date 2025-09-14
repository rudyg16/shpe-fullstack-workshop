import kagglehub
from kagglehub import KaggleDatasetAdapter
import pandas as pd
import sqlite3

# Set the actual file inside the dataset
file_path = "US_Stock_Data.csv"

# Use dataset_load (not load_dataset, which is deprecated)
df = kagglehub.dataset_load(
    KaggleDatasetAdapter.PANDAS,
    "muhammadehsan02/us-stock-market-and-commodities-data-2020-2024",
    file_path,
)
# Remove commas and convert all numeric columns to proper numbers
for col in df.columns:
    if col not in ["Date", "Unnamed: 0"]:  # skip non-numeric
        df[col] = (
            df[col]
            .astype(str)                 # ensure string type
            .str.replace(",", "", regex=False)  # remove commas
        )
        df[col] = pd.to_numeric(df[col], errors="coerce")

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

# connect to SQLite
conn = sqlite3.connect("market.db")
cursor = conn.cursor()

for _, row in df.iterrows():
    date = row["Date"]

    for name, (price_col, vol_col, symbol, cat) in mapping.items():
        price = row[price_col]
        volume = row[vol_col] if vol_col and vol_col in row else None

        cursor.execute("""
        INSERT OR IGNORE INTO assets (name, symbol, cat, date, price, volume)
        VALUES (?, ?, ?, ?, ?, ?)
        """, (name, symbol, cat, date, float(price), volume))

conn.commit()
conn.close()
print("✅ Insert complete")


