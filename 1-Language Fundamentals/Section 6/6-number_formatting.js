// ⭐ 5.6 — Number Formatting (Especially ₹ INR)

// Basic Formatting with toFixed() - return string.
console.log(456.566.toFixed(2))

// Professional Currency Format - Intl.NumberFormat. E-commerce, Billing. too long approach
let price = 3444444444
console.log(new Intl.NumberFormat('en-IN').format(price))

// Currency Style (INR symbol ₹)
let formatted = new Intl.NumberFormat('en-IN', {
    style : 'currency',
    currency : 'INR'
}).format(price)
console.log(formatted)
// These are good to know but cannot remember as it will happen based on need and on the go.

// Exercises
// Exercise 1 — Format Salary
let salary = 75000;
formatted = new Intl.NumberFormat('en-IN', {
    style : 'currency',
    currency : 'INR'
}).format(salary)
console.log(formatted)

// Exercise 2 — Format Big Amount
let fund = "12500000"; // string
fund = Number(fund)
formatted = new Intl.NumberFormat('en-IN', {
    style : 'currency',
    currency : 'INR'
}).format(fund)
console.log(formatted)

// Exercise 3 — Price from User Input
let input = "199.99"; // same way

// Exercise 4 — Total Bill Formatter
let price2 = "499.50";
let qty = "3";
let Total = price2*qty // relying on type coesion although not recommended in real projects
formatted = new Intl.NumberFormat('en-IN', {
    style : 'currency',
    currency : 'INR'
}).format(Total)
console.log(formatted)

// Quiz
// toFixed() returns what type? = string
// 2️⃣ Best way to show ₹ symbol in UI? = Intl.NumberFormat style currency wala method
// 3️⃣ Grouping style for India uses Lakhs/Crores — which locale code do we use? = Intl.NumberFormat('en-IN').format
// 4️⃣ Why convert strings before formatting? = as we need number to format properly
// 5️⃣ Should we use toFixed() alone for money formatting? Yes/No? = No