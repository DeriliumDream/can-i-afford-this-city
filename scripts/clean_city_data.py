import pandas as pd
import re

raw_path = "data/raw_city_costs.csv"
clean_path = "data/cleaned_city_costs.csv"

df = pd.read_csv(raw_path)

cost_columns = ["rent", "groceries", "transport", "utilities", "internet"]

def clean_money(value):
    value = str(value)
    value = re.sub(r"[^0-9.]", "", value)
    return float(value)

for column in cost_columns:
    df[column] = df[column].apply(clean_money)

df["monthly_total"] = df[cost_columns].sum(axis=1)

df.to_csv(clean_path, index=False)

print("Cleaned data saved to", clean_path)
print(df)

df.to_json("data/cleaned_city_costs.json", orient="records", indent=2)