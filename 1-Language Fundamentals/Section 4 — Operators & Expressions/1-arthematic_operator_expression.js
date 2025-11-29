// 4.1 — Arithmetic Operators + Expression Basics

// Think of JavaScript like a calculator inside your program. number are ammount and operator are symbol. An expression is a full maths line. 

// basic tools of logic. Every calculation in a real software app (from billing, counters, timers, percentages, scores…) starts with these. Arithmetic operators perform mathematical operations on numbers. operand, operation, expression. expression = Values + Operators. 6 arthemetic operators

// 1️⃣ Addition +. Adding items to a cart. if string is involved, it will become string concatenation. 
// 2️⃣ Subtraction - . You spend money → balance goes down. 
// 3️⃣ Multiplication *. Price × Quantity. 
// 4️⃣ Division /. int and float both can happen
console.log(12/3)
console.log(10 / 0); // Infinity - is also a number
// 5️⃣ Modulus % - Gives the remainder after division. Check even/odd numbers. Cycles (carousels, looping). Rotations. 
console.log(8%2 == 0) // even
// 6️⃣ Exponent ** - Raises the first number to the power of the second. Encryption. Animations. Math-heavy apps.

// Precedence - BODMAS. later topic
let result = 10 + 5 * 2 - 4 / 2; // /* > +-.
console.log(result)

// ecommerce total
let Quantity = 6
let Price = 77
let discount_percent = 10
let total_ammount = Quantity * Price
let total_payment = total_ammount - 0.1*total_ammount
console.log(total_payment)

// Timer logic
let seconds = 130;
let minutes = Math.floor(seconds / 60)
console.log(minutes)
let second_left = seconds % 60
console.log(`The seconds is actually ${minutes} minutes and ${second_left} seconds`)

// Exercises
// Exercise 1: Predict outputs (don’t run)
10 + 5 * 2 // 20
20 / 2 + 3 // 13
15 % 4 // 3
2 * 2 * 2 // 8
10 + "10" // '1010'
8 - "2" // 6
"5" * 2 // 10
10 / 0 // infinity
18 % 5 // 3
2 ** 4 // 16

// 👉 Exercise 2: Mini real-world tasks
// Calculate final price after discount. - done
// Convert seconds into minutes + seconds. - done
// Check if a number is even or odd using %. - done
// Compute bill for quantity × price. = done
// Find cube of a number using **.
let number = 45
let cube_num = number**3

// Mini Project: Score Calculator
let marks1 = 78
let marks2 = 79
let marks3 = 99
let total_marks = 300
let percentage = ((marks1 + marks2 + marks3) / total_marks) * 100
console.log(`You scored ${percentage} percentage , which is ${marks1 + marks2 + marks3} is marks scored out of total marks of ${total_marks}`)