// ⭐ 6.5 — Function Expressions

// We can create a function without a name and store it inside a variable. Function is anonymous (no name). That variable name become the function name. A function is now a value — JavaScript treats it like data.
const sayHello = function () {
  console.log("Hello!");
};
sayHello()
// Only function declaration is hoisted. This function expression is not hoisted as it is stored in variable and variable is in TDZ in memory phase and so this happens. Expression is more common in modern JS. 
let goal = function(goal, name = 'Shibu') { // here goal should be written before name else we will get a wrong output
    console.log(`${name} goal is to be a ${goal}`)
}
goal('Freelancer')

// Exercise
// sayGoal - done
// multiply
const multiply = function(a,b) { console.log(a*b) }
multiply(7,8)
const getIntro = function(name,Skill) {
    console.log(`${name} is learning ${Skill}`)
}
getIntro('Saransh','JS')

// Quick Understanding Check
// Why can’t function expressions be called before they are defined? = it is not hoisted as variable with const/let is set in TDZ in memory creation phase and so shows error. 
// What is an anonymous function? = with no name like function expression. The name of variable will become the name of function
// Why do modern developers use function expressions a lot? = due to multiple purpose like callback, event listener and so.