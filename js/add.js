// دسترسی به فیلدهای ورودی
const form = document.getElementById("transaction-form");
const titleInput = document.getElementById("transaction-title");
const amountInput = document.getElementById("transaction-amount");
const typeInput = document.getElementById("transaction-type"); // اضافه کردن دسترسی به نوع تراکنش

// دریافت تراکنش‌ها از localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// ارسال فرم
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // مقدار عنوان
    const title = titleInput.value.trim();

    // تبدیل مقدار عددی
    const amount = parseFloat(amountInput.value);

    // مقدار نوع تراکنش
    const type = typeInput.value; // دریافت نوع تراکنش

    // اعتبارسنجی
    if (title === "" || isNaN(amount)) {
        alert("لطفا عنوان و مبلغ معتبر وارد کنید");
        return;
    }

    const newTransaction = {
        id: Date.now(),
        title,
        amount: type === "expense" ? -amount : amount, // اعمال علامت منفی برای هزینه
        type: type, // اضافه کردن نوع تراکنش به تراکنش
    };

    // افزودن تراکنش به لیست
    transactions.push(newTransaction);

    // ذخیره در localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // هدایت به داشبورد
    window.location.href = "index.html";
});