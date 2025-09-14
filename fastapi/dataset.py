import kagglehub
from kagglehub import KaggleDatasetAdapter

# Set the actual file inside the dataset
file_path = "US_Stock_Data.csv"

# Use dataset_load (not load_dataset, which is deprecated)
df = kagglehub.dataset_load(
    KaggleDatasetAdapter.PANDAS,
    "muhammadehsan02/us-stock-market-and-commodities-data-2020-2024",
    file_path,
)

print("First 5 records:")
print(df.columns.tolist())
