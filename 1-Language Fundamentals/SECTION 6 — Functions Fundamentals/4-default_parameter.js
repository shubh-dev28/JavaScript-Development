// ⭐ 6.4 — Default Parameters

// Sometimes we call a function without giving an argument cause undefined. Default parameters prevent that problem. 
function greet(name = "Developer") {
  console.log(`Hello ${name}`);
}
greet();        // Hello Developer. when no argument is passed, that default parameter become argument
greet("Shibu"); // Hello Shibu. argument will override the default parameter

// we can also work with multiple parameter
function Total(price, item = 2) {
    console.log(price * item)
}
Total(224)
Total(224,6) // default parameter overriden

// Exercise
function greeting(name = "friend") {
    console.log(`Hello ${name}`)
}
greeting() // default parameter applied
greeting('Saransh') // default parameter overriden

function createProfile(name, role = "Learner") {
    console.log(`${name} is a ${role}`)
}
createProfile('Shibu')
createProfile('Saransh','Hustler')
function calculateBill(amount, tax = 0.1) {
    console.log(`Total Bill - ${amount + tax*amount}`)
}
calculateBill(500)
calculateBill(500,0.3)

// Understanding Check — Answer These Questions
// Why do we use default parameters? = to avoid the burden of argument and function can even work without argument or if we want some default argument
// What happens if you call a function without passing a required argument? = it will take default parameter as argument
// Should default parameters come first or last in the parameter list? Why? = last as first priority is given to given argument and in case of no argument, the default parameter is used.