// ⭐ 6.8 — Mini Project: Utility Library

const add = (a,b) => a+b
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b
const toUpper = str => str.toUpperCase()
const toLower = str => str.toLowerCase()
const capitalize = str => {
    let a = str.toLowerCase()
    return a[0].toUpperCase()+a.slice(1,a.lenth)
}
const reverseString = str => [...str].reverse().join(''); // did not understand btw but copy from google. something like convert to array using spread and use some array method to reverse and then convert to string again
const isEven = x => x%2===0?true : false
const randomBetween = (min,max) => Math.random()*(max-min + 1) + min
const toCurrency = (amount) => `₹${amount.toFixed(2)}`;

// Testing
console.log(add(7,5))
console.log(subtract(9,2))
console.log(multiply(2,6))
console.log(divide(8,2))
console.log(toUpper('shibu'))
console.log(toLower('sHIbu'))
console.log(capitalize('sarAnsh'))
console.log(reverseString('Shibu'))
console.log(isEven(77))
console.log(randomBetween(3,45))
console.log(toCurrency(77))