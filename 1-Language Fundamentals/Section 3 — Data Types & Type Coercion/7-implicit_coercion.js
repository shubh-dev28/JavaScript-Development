// 📌 3.7 — Implicit Type Coercion

// JavaScript automatically converts data types when required to make the operation valid. string + anything - Convert to string. + with number (not string) - Convert to number. Boolean in math - Convert to number. 
console.log(3 + '3')  // converted to string
console.log(3 - '3') // converted to num

// all boolean will get converted to number. true - 1, false - 0
console.log(true + 1)
console.log(true - 1)
console.log(false + 7)
console.log(false - 7)
console.log(true + true + true + false) //3

// when some operation involve anything other then +, it will try to convert that to number
console.log('5' * '2')
console.log('5' * (true * 2))
console.log(null + 3) // null -> 0 
console.log(undefined + 4) // undefined - NaN

// always prefer === not ==. 