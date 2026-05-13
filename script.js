function calculateBudget() {
    const income = Number(document.getElementById("income").value);
    const rent = Number(document.getElementById("rent").value);
    const food = Number(document.getElementById("food").value);
    const transport = Number(document.getElementById("transport").value);
  
    const totalExpenses = rent + food + transport;
    const leftover = income - totalExpenses;
  
    const result = document.getElementById("result");
  
    if (leftover > 0) {
      result.textContent = `You have $${leftover} left this month 🎉`;
    } else if (leftover === 0) {
      result.textContent = "Your budget is exactly balanced.";
    } else {
      result.textContent = `You are overspending by $${Math.abs(leftover)} 😭`;
    }
}