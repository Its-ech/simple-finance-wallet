// دریافت لیست تراکنش
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// محاسبه موجودی کل
let totalIncome = 0;
let totalExpense = 0;

transactions.forEach(transaction => {
    const amount = parseFloat(transaction.amount);
    if (transaction.type === "income") { // بررسی نوع تراکنش
        totalIncome += amount;
    } else {
        totalExpense += Math.abs(amount);
    }
});

// محاسبه درآمد - هزینه
const totalBalance = totalIncome - totalExpense;

// مقداردهی به DOM
const balanceEl = document.getElementById("total-balance");
const incomeEl = document.getElementById("total-income");
const expenseEl = document.getElementById("total-expense");

// نمایش اعداد با جداکننده هزارگان
balanceEl.textContent = totalBalance.toLocaleString() + " تومان";
incomeEl.textContent = totalIncome.toLocaleString() + " تومان";
expenseEl.textContent = totalExpense.toLocaleString() + " تومان";