// ⭐ 6.6 — Arrow Functions (Modern, Short & Powerful)

// compact and modern way to write functions. It’s a function expression with a shorter syntax. clean, short logic. Modern best practice. no need for function keyword, only parameter and function body will be sufficient
const greet = (name) => {
  console.log(`Hello ${name}`);
};

// Syntax Improvements = If only 1 parameter → parentheses optional. If no parameters → use ().
const greet2 = name => {
  console.log(`Hello ${name}`);
};
const sayHello = () => {console.log(`Hello`)}
sayHello()
// If function has 1 statement, you can remove {} and return. This is called implicit return. only when there is no console log, only the function produce a value by returning something.
const name = (name) => name
console.log(name('SK'))
const lowerCase = (text) => text.toLowerCase()
console.log(lowerCase('SaRansh'))

// Exercise
// Returns double the input number
const double = num => num*2
console.log(double(66))
// greetUser - done
// Returns square of a number
const square = num => num**2
// Takes two values: name and place
const makeSentence = (name,place) => console.log(`${name} lives in ${place}`)
makeSentence('Shibu','Bihar')

// 🎯 Quick Understanding Check
// 1️⃣ What is implicit return? = when u have only one statement or u need to return an output of function, u can skip {}. this is called implicit return
// 2️⃣ Do arrow functions have their own this? = no
// 3️⃣ Why are arrow functions more popular in modern JS? = short consise clean doing same task