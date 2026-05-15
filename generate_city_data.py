import json

cities = [
    {
        "city": "Melbourne",
        "averageRent": 2200,
        "averageFood": 600,
        "averageTransport": 200
    },
    {
        "city": "Sydney",
        "averageRent": 2800,
        "averageFood": 650,
        "averageTransport": 220
    },
    {
        "city": "Brisbane",
        "averageRent": 2000,
        "averageFood": 580,
        "averageTransport": 180
    }
]

with open("cities.json", "w") as file:
    json.dump(cities, file, indent=4)

print("cities.json created successfully!")