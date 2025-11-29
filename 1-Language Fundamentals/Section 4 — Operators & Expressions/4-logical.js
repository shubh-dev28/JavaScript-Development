// ⭐ 4.4 — Logical Operators

// They help combine multiple conditions and return true or false. 

// AND Operator && - Both sides must be true. basically all condition must be true to returen it fully true. Used when you need multiple conditions satisfied. validEmail AND validPassword, stock > 0 AND userLoggedIn.
console.log(true && true && true)
console.log(true && true && true && true && false)
let age = 24
let hasID = false
console.log(age >= 18 && hasID)

// OR Operator || - At least one must be true. at least one has balance for payment
console.log(false || true || false || false)
console.log(false || false || false || false)
let bankBalance = 0
let wallet = 1000
console.log(`Can pay - ${bankBalance >0 || wallet >0}`)

// NOT Operator ! - negate the condition. 
console.log(!true)

// Short Circuit Concept = JavaScript stops evaluating as soon as answer is known. false && anything // stops → false. true || anything  // stops → true. Basically JS try to be lazy by reducing work as much as possible. 
let user = null;
console.log(user && user.name); // null (prevents error). null is falsy

// Exercises - Mini Task (Real World)
let age2 = 34
let hasTicket = false
let isVIP = true
let grantAccess = (age2 >= 18 && hasTicket) || isVIP
console.log(`Is grant access - ${grantAccess}`)
