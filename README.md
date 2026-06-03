# 🌍 Can I Afford This City?

A web application that helps users estimate whether they can afford to live in different cities based on monthly income and living expenses.

## Features

- Select a city from a dropdown menu
- Automatically loads living cost data from a JSON file
- Calculates monthly expenses
- Calculates remaining income after expenses
- Displays savings rate percentage
- Shows a detailed expense breakdown
- Compare living costs between two cities
- Dark mode support

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- JSON
- Fetch API

## Project Structure

```text
can-i-afford-this-city/
│
├── index.html
├── style.css
├── script.js
│
├── data/
│   └── cleaned_city_costs.json
│
└── README.md
```

## How It Works

1. Select a city from the dropdown menu.
2. Living cost data is automatically loaded.
3. Enter your monthly income.
4. Click Calculate.
5. View:
   - Monthly expenses
   - Remaining income
   - Savings rate
   - Expense breakdown

## Example

### Melbourne

Monthly Income: $5000

Expenses:

- Rent: $1900
- Food: $450
- Transport: $180
- Utilities: $220
- Internet: $80

Total Expenses: $2830

Remaining Income: $2170

Savings Rate: 43.40%

## Future Improvements

- More cities and countries
- User-defined custom cities
- Save favourite cities
- Currency conversion
- Responsive mobile design
- Cost-of-living trends over time

## Learning Outcomes

This project demonstrates:

- DOM manipulation
- Event handling
- Working with JSON data
- Fetch API requests
- Dynamic UI updates
- Data comparison logic
- Basic financial calculations

## Author

Jahnvi Gupta