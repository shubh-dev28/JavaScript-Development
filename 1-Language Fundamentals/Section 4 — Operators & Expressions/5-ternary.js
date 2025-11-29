// ⭐ 4.5 — Ternary Operator

// we make decisions all the time. Show “Login” button or “Logout”?. Show green success message or red error?. product available or out of stock?.

// It’s a one-line decision statement. condition ? valueIfTrue : valueIfFalse. 
let age2 = 20;
let result = age2 >= 18 ? "Adult" : "Minor";
console.log(result);

// Real-World Use Cases = Stock Message if product is available or not, 
// Auth UI Text - we can even write it inside console log.
let isLoggedIn = true
console.log(isLoggedIn? 'Logout' : 'Login')

// Nested Ternary is also possible. ex - grading system. Not recommended
let marks = 87
let grade = marks>=95? 'A++' : marks>=90? 'A' : marks>80? 'B' : 'Good'
console.log(grade)

// Exercises
console.log(10 > 5 ? "True" : "False"); // true
let age = 16;
console.log(age >= 18 ? "Adult" : "Minor"); // minor
let loggedIn = false;
console.log(loggedIn ? "Dashboard" : "Login Page"); // Login page
let points = 0;
console.log(points ? "Has points" : "No points"); // no points. truthy falsy concept as the condition is trying to get converted to boolean
let num = 4;
console.log(num % 2 === 0 ? "Even" : "Odd"); // even
let price = 500;
let coupon = true;
console.log(price > 600 ? "High Price" : coupon ? "Discount Applied" : "No Discount"); // Discount applied

// Mini Task — (Real App Flow)
let hour = 16
console.log(hour<12?'Good Morning' : hour<18?'Good Afternoon' : 'Good Evening')