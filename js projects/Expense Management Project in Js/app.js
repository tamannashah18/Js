
let income = 0;
let expenses = [];
let exp={
    entertainment:0,
    groceries:0,
    Survival_Expenses:0,
}

const incomeInput = document.getElementById('income-input');
const addIncomeBtn = document.getElementById('add-income');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategorySelect = document.getElementById('expense-category');
const addExpenseBtn = document.getElementById('add-expense');
const totalIncomeDisplay = document.getElementById('total-income');
const totalExpensesDisplay = document.getElementById('total-expenses');
const balanceDisplay = document.getElementById('balance');
const expenseChart = document.getElementById('expense-chart');

addIncomeBtn.addEventListener('click', addIncome);
addExpenseBtn.addEventListener('click', addExpense);

let chartConfig = {
  type: 'pie',
  data: {
    labels: ['Savings', 'Entertainment','Groceries', 'Survival_Expenses'],
    datasets: [{
      data: [income, 0, 0, 0],
      backgroundColor: ['green', 'blue', 'yellow', 'red'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
};
let expensePieChart = new Chart(expenseChart, chartConfig);

function updateChart() {
  let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  let chartData = [income-totalExpenses,exp.entertainment,exp.groceries,exp.Survival_Expenses];

  expensePieChart.data.datasets[0].data = chartData;
  expensePieChart.update();
}

function addIncome() {
  const incomeValue = parseFloat(incomeInput.value);
  if (!isNaN(incomeValue) && incomeValue > 0) {
    income += incomeValue;
    updateBudget();
    updateBudgetAndComparison();
    incomeInput.value = '';
  }
}

function addExpense() {
  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = parseFloat(expenseAmountInput.value);
  const expenseCategory = expenseCategorySelect.value;

  if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
    const expense = { name: expenseName, amount: expenseAmount, category: expenseCategory };
    expenses.push(expense);
    if(expenseCategory=="Survival_Expenses")
    exp.Survival_Expenses+=expenseAmount;
    if(expenseCategory=="groceries")
    exp.groceries+=expenseAmount;
    if(expenseCategory=="entertainment")
    exp.entertainment+=expenseAmount;
    updateBudget();
    updateBudgetAndComparison();
    updateExpenseTable();
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
  }
}

function updateBudget() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = income - totalExpenses;

  totalIncomeDisplay.textContent = income.toFixed(2);
  totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
  balanceDisplay.textContent = balance.toFixed(2);

  updateChart(); 
}

function updateExpenseTable() {
    const tableBody = document.getElementById('expense-table-body');
    tableBody.innerHTML = ''; // Clear previous rows
  
    expenses.forEach(expense => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount.toFixed(2)}</td>
        <td>${expense.category}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  function calculateTargetAmounts() {
    const total = income;
    const expenseTarget = total * 0.5;
    const savingsTarget = total * 0.3;
    const luxuryTarget = total * 0.2;
    return {
      expense: expenseTarget,
      savings: savingsTarget,
      luxury: luxuryTarget
    };
  }
  function updateBudgetAndComparison() {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = income - totalExpenses;
    const targetAmounts = calculateTargetAmounts(income);
  
    // Update the budget display
    totalIncomeDisplay.textContent = income.toFixed(2);
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
  
    const expenseLimit = targetAmounts.expense.toFixed(2);
    const savingsLimit = targetAmounts.savings.toFixed(2);
    const luxuryLimit = targetAmounts.luxury.toFixed(2);
  
    document.getElementById('expense-limit').textContent = expenseLimit;
    document.getElementById('savings-limit').textContent = savingsLimit;
    document.getElementById('luxury-limit').textContent = luxuryLimit;
  
    document.getElementById('expense-actual').textContent = totalExpenses.toFixed(2);
    document.getElementById('savings-actual').textContent = balance.toFixed(2);
    document.getElementById('luxury-actual').textContent = exp.entertainment.toFixed(2);
  
    const expenseDifference = (targetAmounts.expense-totalExpenses).toFixed(2);
    const savingsDifference = (balance - targetAmounts.savings).toFixed(2);
    const luxuryDifference = (targetAmounts.luxury-exp.entertainment).toFixed(2);
  
    document.getElementById('expense-difference').textContent = expenseDifference;
    document.getElementById('savings-difference').textContent = savingsDifference;
    document.getElementById('luxury-difference').textContent = luxuryDifference;
  }