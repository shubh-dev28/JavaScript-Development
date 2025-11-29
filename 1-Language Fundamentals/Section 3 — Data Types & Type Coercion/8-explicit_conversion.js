// 3.8 — Explicit Type Conversion

// Also called Type Casting. You decide what type a value should become — clearly and safely. 3 Main Conversions -> when convert to Number - Number(), parseInt(), parseFloat(). String - String(), toString(). Boolean - Boolean().

// Convert to Number - Works well when input is clean. If text has mixed characters → NaN. 
console.log(Number('88'))
console.log(Number('abc')) // NaN
console.log(Number(true))
console.log(Number(null)) // 0 
console.log(Number(''))

console.log(parseInt('12od')) // just keep number and remove all other character
console.log(parseFloat('123.8abc')) // 123.8

// Convert to String - anything can be converted to string easily
console.log(String(67))
console.log(String(true))
console.log(String(null))
console.log((23).toString())

// Convert to Boolean - truthy falsy value concept
console.log(Boolean("Shibu")) // true
console.log(Boolean(null))

// implicit conversion can create very unpredictable results so we need explicit conversion. 

// Exercise
// 1️⃣ Convert these to numbers → print results - already done else wise
// Convert these to strings: - anything can be converted to string.
// Convert these to boolean: - based on truthy falsy concept.