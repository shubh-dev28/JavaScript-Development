// ⭐ 5.4 — Numbers & Safe Conversions

// JavaScript has only one number type for all kinds of numbers. User input from form, api, prompt come as string. we need to convert that th handle things safely. 

// Safe Number Conversion Methods = 3 methods. Number() will convert only if it is convertible else return NaN. parseInt() will convert only int part and remove all text, when we need to extract num from texts like 42px. parseFloat(). 
console.log(Number('233'))
console.log(Number('233abc')) // NaN as not convertible
console.log(Number(undefined))
console.log(Number(null)) // 0 as null as number is 0
console.log(Number(true)) // 1
console.log(null == 0)
console.log(null == undefined) // true. weired behavior

console.log(parseInt('234dhckjdnckj')) // only remove last characters not first or middle. Reads until first non-numeric character.
console.log(parseFloat('233.56nmcbskvcv')) // same way to work

// checking NaN - isNaN(value) // true or false
console.log(isNaN('abc'))
let x = Number("hello");
if (isNaN(x)) {
  console.log("Invalid number input");
}

// E-commerce total price calculation:
let price = '334'
let quantity = '34'
let total = price * quantity // automatically get converted to number due to type coersion
console.log(total)

// Decimal Fixing
console.log(0.1 + 0.2); // 0.30000000000000004. long decimals
// solution - toFixed() returns a string, so convert again if needed
console.log((0.1+0.2).toFixed(3), typeof (0.1+0.2).toFixed(3)) // we will just limit the num after decimal. type is string
let val = 0.1+0.2
console.log(Number(val.toFixed(2)))

// Exercises
// Exercise 1 — Conversion Practice
let a = "105";
console.log(Number(a)) // 105
let b = "35px";
console.log(parseInt(b)) // 35
let c = "99.99";
console.log(Number(c)) // 99.99
let d = "hello";
console.log(Number(d)) // nan

// Exercise 2 — Billing Calculator
let price2 = "199.50";
let qty = "3";
// we can do this without conversion also
let total2 = price2 * qty // type coersion
console.log(total2)

// Exercise 3 — Fix Decimal Weirdness
let y = 0.1 + 0.2;
y = y.toFixed(2)
console.log(y)

// Quiz
// 1️⃣ What does Number("12abc") give? = nan
// 2️⃣ Which conversion method can handle decimals? = parsefloat
// 3️⃣ Best method to extract number from "120px"? = parseint
// 4️⃣ toFixed() returns which type? (string or number?) = string
// 5️⃣ 0.1 + 0.2 exact result? = some lamba chaura decimal