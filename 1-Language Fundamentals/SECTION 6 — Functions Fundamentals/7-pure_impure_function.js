// ⭐ 6.7 — Pure vs Impure Functions

// Why = As apps grow bigger :- more data, more UI updates, more user actions. So we classify functions into two types. Pure and Impure Function. 

// Pure Functions (Ideal Functions) = always follows 2 golden rules - Rule 1 — Same input → Same output. Rule 2 — No side effects - Does ONLY one job: returns a value. it does not modify external variable, DOM, database and does not use random values, date/time. it is predictable, easy to get and reuse, no hidden bugs. 
function mul(x,y) {
    return x*y
}

// Impure Functions (Risky / unpredictable) = Uses external variable. generate Random value. Time based (different every call). means those function which is either dependent on external factors and give different or unpredictable results based on situation. 
let num = 77 // here function depends on external variable and if we reassign the external variable, the result of function will also get changed. But if we define num inside function body, it will become the pure function.
num = 55 // now function result will be different
function squre(num) {
    return num**2
}
console.log(squre(num))

function random() {
    return Math.random()
}
console.log(random()) // return different unpredictable value each time we called

function getYear() {
  return new Date().getFullYear(); // unpredictable as year can change
}
console.log(getYear())

// Exercise
// Pure function → multiply two numbers - done
// Pure function → capitalize a string
function string(x) {
    return x.toUpperCase()
}
console.log(string('Shibu'))
// Impure function → update a global variable
let age = 45
function modifyAge(num) {
    age+=num
}
modifyAge(12)
console.log(age)

// Impure function → return a random number - done already


// Questions
// What are the 2 rules of a pure function? - alraedy given
// Why are pure functions easier to test? = as it give predictable output
// Give 2 examples of side effects = external variable, random outcome