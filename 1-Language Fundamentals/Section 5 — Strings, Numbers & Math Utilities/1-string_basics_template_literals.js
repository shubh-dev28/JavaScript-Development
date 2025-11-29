// ⭐ 5.1 — STRING BASICS & TEMPLATE LITERALS

// Think of strings as “text containers” in JavaScript. store words, sentences, characters — basically anything written. 3 ways to write string - enclosed inside singe/double quotes or inside backticks ` (template literals). 
let name = 'Shibu'
let goal = 'Full Stack freelance developer'
console.log(name + ' aim is to become a ' + goal) // looks good but is a messy code and need a better way - template literals

// Template literal way - we can write variable, value, expression that should eventually led to a value inside ${}. all things will be treated as text inside template literals.
console.log(`${name} aim is to become a ${goal}`)
console.log(`${2+3*4-1/4}`) // expression
console.log(`${18>12?'Executed' : 'Not executed'}`) // ternary operator
// even multiline strings can be done using it
let poem = `Twinkle twinkle little star
how i wonder what u are
bas itna hi yaad hai`
console.log(poem)

// Escape Characters - somewhat useful ig. \" \', \n, \t
console.log("My name is \"Shibu Saransh\" ")

// Exercises 1
let myName = 'Shibu Saransh'
let myGoal = 'A high paying freelance developer or Remote developer'
let myVillage = 'Bihar'
console.log(`My name is ${myName} and i belong to ${myVillage} and has aim to be a ${myGoal}`)

// Exercise 2
console.log(`5 + 3 = ${5+3} and 10 * 3 = ${10*3}`)

// Exercise 3
console.log('Shibu is King');
console.log("Shibu will be a winner eventually");
console.log('Shibu is the \nUltimate boss'); // can also be done using template

// 📝 Step 9 — Quick Quiz (Very Short)
// 1- 2nd one 
// 2 - yes
// 3 = `${}`