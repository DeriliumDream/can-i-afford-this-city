let citiesData = [];

function calculateBudget() {
  const income = Number(document.getElementById("income").value);
  const rent = Number(document.getElementById("rent").value);
  const food = Number(document.getElementById("food").value);
  const transport = Number(document.getElementById("transport").value);
  const utilities = Number(document.getElementById("utilities").value);
  const internet = Number(document.getElementById("internet").value);

  const totalExpenses = rent + food + transport + utilities + internet;
  const leftover = income - totalExpenses;
  const savingsRate = ((leftover / income) * 100).toFixed(2);

  const result = document.getElementById("result");
  const breakdown = document.getElementById("breakdown");

  if (income <= 0) {
    result.style.color = "red";
    result.textContent = "Please enter your monthly income.";
    breakdown.innerHTML = "";
    return;
  }

  if (leftover > 0) {
    result.style.color = "green";
    result.innerHTML = `
      You have $${leftover} left this month 🎉<br>
      Savings Rate: ${savingsRate}%
    `;
  } else if (leftover === 0) {
    result.style.color = "black";
    result.textContent = "Your budget is exactly balanced.";
  } else {
    result.style.color = "red";
    result.innerHTML = `
      You are overspending by $${Math.abs(leftover)} 😭<br>
      Savings Rate: ${savingsRate}%
    `;
  }

  breakdown.innerHTML = `
    <h3>Monthly Expenses</h3>
    🏠 Rent: $${rent}<br>
    🍔 Food: $${food}<br>
    🚌 Transport: $${transport}<br>
    💡 Utilities: $${utilities}<br>
    🌐 Internet: $${internet}<br><br>
    <strong>Total Expenses: $${totalExpenses}</strong>
  `;
}

const citySelect = document.getElementById("citySelect");
const cityOne = document.getElementById("cityOne");
const cityTwo = document.getElementById("cityTwo");

fetch("data/cleaned_city_costs.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not load JSON file");
    }
    return response.json();
  })
  .then(cities => {
    citiesData = cities;

    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city.city;
      option.textContent = `${city.city}, ${city.country}`;
      citySelect.appendChild(option);

      const optionOne = document.createElement("option");
      optionOne.value = city.city;
      optionOne.textContent = `${city.city}, ${city.country}`;
      cityOne.appendChild(optionOne);

      const optionTwo = document.createElement("option");
      optionTwo.value = city.city;
      optionTwo.textContent = `${city.city}, ${city.country}`;
      cityTwo.appendChild(optionTwo);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

citySelect.addEventListener("change", function () {
  const selectedCity = citySelect.value;
  const selectedCityData = citiesData.find(city => city.city === selectedCity);

  if (selectedCityData) {
    document.getElementById("rent").value = selectedCityData.rent;
    document.getElementById("food").value = selectedCityData.groceries;
    document.getElementById("transport").value = selectedCityData.transport;
    document.getElementById("utilities").value = selectedCityData.utilities;
    document.getElementById("internet").value = selectedCityData.internet;
  }
});

function compareCities() {
  const cityOneName = cityOne.value;
  const cityTwoName = cityTwo.value;
  const compareResult = document.getElementById("compareResult");

  const firstCity = citiesData.find(city => city.city === cityOneName);
  const secondCity = citiesData.find(city => city.city === cityTwoName);

  if (!firstCity || !secondCity) {
    compareResult.textContent = "Please choose two cities.";
    return;
  }

  if (firstCity.city === secondCity.city) {
    compareResult.textContent = "Please choose two different cities.";
    return;
  }

  const difference = secondCity.monthly_total - firstCity.monthly_total;
  const cheaperCity =
    firstCity.monthly_total < secondCity.monthly_total
      ? firstCity.city
      : secondCity.city;

  compareResult.innerHTML = `
    <h3>${firstCity.city} vs ${secondCity.city}</h3>

    ${firstCity.city}: $${firstCity.monthly_total}<br>
    ${secondCity.city}: $${secondCity.monthly_total}<br><br>

    Difference: $${Math.abs(difference)}<br>
    Cheaper City: <strong>${cheaperCity}</strong>
  `;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}