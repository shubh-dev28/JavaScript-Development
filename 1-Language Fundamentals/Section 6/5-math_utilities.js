// ⭐ 5.5 — Math Utilities in JavaScript

// JavaScript has a built-in Math object that gives you powerful numeric functions. 
// Math.round() - Rounds to nearest integer. Ratings, game scores
console.log(Math.round(3.56), Math.round(3.49))
// Math.floor() - Always down round to nearest int. index, pagination, Converting to whole numbers properly.
console.log(Math.floor(2.7)) // lower
// Math.ceil() - Always up round to nearest int. Billing, Room count in hotel booking.
console.log(Math.ceil(4.01)); // 5

// Find Smallest / Largest Value from set of numbers using min, max.
console.log(Math.min(4, 9, 2, 7)); // 2
console.log(Math.max(4, 9, 2, 7)); // 9

// Random Numbers = Math.random() - Gives a number from 0 (inclusive) to 1 (exclusive). 
console.log(Math.random()) // 0-1
// we can also generate random between a range
let min = 10
let max = 32
let random = Math.random() + 1 // 1(inclusive)-2(exclusive)
console.log(random)
random = Math.random()*(max - min + 1) + min // athough did not understand how
console.log(random)
// dice logic - same way but only int value acceptable
min = 1
max = 6
random = Math.round(Math.random()*(max - min + 1) + min) 
console.log(random)

// Square Root & Power
console.log(Math.sqrt(225), Math.pow(2,3))

// Exercises
// Exercise 1 — Dice Roll - done already
// Exercise 2 — Random OTP Generator
min = 1000
max = 9999
random = Math.round(Math.random()*(max - min + 1) + min) 
console.log(`Your OTP is - ${random}`)

// Exercise 3 — Round Practice
let num = 4.3
console.log(`Value : ${num} -> floor: ${Math.floor(num)}, ceil: ${Math.ceil(num)}, round: ${Math.round(num)}`)
num = 9.7
console.log(`Value : ${num} -> floor: ${Math.floor(num)}, ceil: ${Math.ceil(num)}, round: ${Math.round(num)}`)
num = 5.5
console.log(`Value : ${num} -> floor: ${Math.floor(num)}, ceil: ${Math.ceil(num)}, round: ${Math.round(num)}`)

// Exercise 4 — Phone Number Mask - not remember

// Exercise 5 — Perfect Square Check (good question btw)
num = 49
let root = Math.sqrt(num)
console.log(Math.round(root) === root? 'Perfect Squre' : 'Not Perfect Squre')

// Quiz
// 1️⃣ Math.random() range default? = 0-1 float
// 2️⃣ Dice formula? (1-6) - already solves\d
// 3️⃣ Which always rounds UP? = ceil
// 4️⃣ Math.min(5, 3, 9, 1) → ? 1
// 5️⃣ Does Math.random() ever return 1? = no