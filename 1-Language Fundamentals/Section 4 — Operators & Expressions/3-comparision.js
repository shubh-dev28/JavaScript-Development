// ⭐ 4.3 — Comparison Operators

// Making Decisions in Code. is password correct?, do you have enough balance?, is user eligible?, stock available or not?, is health > 0?. Whenever we need true/false, comparisons are used. Comparison operators compare two values and return a boolean. 
console.log(12 >= 23)

// 8 comparison operators:
// 1. == (equality - only checks value, performs type coercion). Converts values to number before comparing
console.log('12' == 12)
console.log(true == 1)
// 2. === (strict equality - checks both value and type). No conversion = safer. only strictly compare. ALWAYS prefer ===.
console.log(122 === '122')
console.log(122 === 122)
// 3. != (inequality - only checks value, performs type coercion)
console.log(12 != '12')
// 4. !== (strict inequality - checks both value and type)
console.log(12 !== '12')
// 5. > (greater than)
console.log(12 > 23)
// 6. >= (greater than or equal to)
console.log(12 >= 12)
// 7. < (less than)
// 8. <= (less than or equal to)

// Examples
// age check
let age = 55
console.log(`Eligible to drive - ${age >= 18}`)

let isLoggedIn = false
console.log(isLoggedIn === true)

// Double danger with null/undefined - Always use === to avoid feeling like JS cheated you.
console.log(null == undefined);  // true 
console.log(null === undefined); // false 

// Login Simulation
let userName = 'Saransh'
let userInputName = 'Saransh'
console.log(`Login allowed - ${userInputName === userName}`)

// Exercises
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log("5" > 3); // true as it allow type coesion
console.log(null == 0); // true
console.log(undefined === null); // false
let marks = 90; 
console.log(marks > 80); // true
console.log(5 >= 5); // true
console.log("A" < "a");  // true
console.log(false == 0); // true
console.log(false === 0); // false

// Write a Eligibility Check Program:
let age2 = 45
let hasID = true
if (age2 >=18 && hasID === true) {
    console.log(`Eligible`)
} else {
    console.log(`Not Eligible`)
}