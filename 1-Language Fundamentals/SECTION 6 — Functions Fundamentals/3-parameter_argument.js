// ⭐ 6.3 — Parameters & Arguments

// functions that can accept input. That input is called arguments. parameter is A placeholder → variable in the function definition. argument is Actual value you pass into the function. 
function greet(name) { // here name is parameter
    console.log(`Hello ${name}`)
}
greet('Shibu') // shibu is argument. we can give different arguments and function return output based on that
greet('Saransh')

// we can also have multiple parameter. 
function add(a,b,c) {
    console.log(a+b+c)
}
add(2,5,9) // order matters. a=2, b=5, c=9

function details(name, place) {
    console.log(`His name is ${name} and he lives in ${place}`)
}
details('Shibu', 'Bihar')
details('Bihar', 'Shibu') // wrong order of argument cause different outcome. so order of parameter = order of argument

// Exercise
// 1- done in other way
function calculateAge(birthYear) {
    console.log(`Your age is ${2025 - birthYear}`)
}
calculateAge(2001)
function makeIntro(name,goal) {
    console.log(`My name is ${name} and my goal is to become a ${goal}`)
}
makeIntro('Saransh', 'Remote Developer')
makeIntro('SHibu', 'Freelancer')
makeIntro('Shubh', 'Full Stack Developer')

// 🎯 Quick Understanding Check
// What is the difference between parameter and argument?
// parameter is input given when defining a function and argument is input given when function is called
// Why do we use parameters in a function?
// parameter is input to function and is used as a variable inside the function defination
// Does the order of parameters matter?
// yes. Both must have same order