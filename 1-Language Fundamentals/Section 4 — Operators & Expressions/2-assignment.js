// ⭐ 4.2 — Assignment Operators

// In programming, values change all the time. score = score + 1 = score += 1. short and smart way. Assignment operators are like shortcuts for updating values. 
// Basic Assignment =.  when we just assign a value to a variable. other formats are +=, -=, *=, /=, **=, %= etc. Cart quantity increase, click counters, XP systems. Using money from wallet, energy in games. Double the item quantity, power-ups. Splitting bills, reducing speed by half. 
let x = 56
x*=2
console.log(x)

// cart add remove logic. 

// Exercises
let m = 10;
m += 3;
console.log(m); // 13

let y = 20;
y -= 5 * 2; // y = y-5*2 = y-10 = 10
console.log(y); // 10

let a = 4;
a **= 2 + 1; // a=a**3
console.log(a); // 64

let p = 50;
p %= 9;
console.log(p); // 5

let points = 10;
points += "5"; // perform string concatenation
console.log(points); // '105'

// Step 6 — Mini Task
// Build a Wallet Manager:
let startingBalance = 500
startingBalance -= 120
startingBalance += 250
startingBalance -=40
let finalBalance = startingBalance
console.log(`Final Balance - ${finalBalance}`)
