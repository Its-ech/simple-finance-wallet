// دریافت از لوکال
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// دسترسی به جدول
const tableBody = document.querySelector("#transactions-table tbody");

// نمایش تراکنش ها در جدول
transactions.forEach(transaction => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = transaction.title;
    row.appendChild(titleCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = transaction.amount.toLocaleString() + " تومان";
    row.appendChild(amountCell);

    // نمایش نوع تراکنش
    const typeCell = document.createElement("td");
    typeCell.textContent = transaction.type === "income" ? "درآمد" : "هزینه";
    row.appendChild(typeCell);

    const dateCell = document.createElement("td");
    const date = new Date(transaction.id);
    dateCell.textContent = date.toLocaleDateString("fa-IR");
    row.appendChild(dateCell);

    tableBody.appendChild(row);
});