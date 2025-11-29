// 3.3 — Reference Types (Objects, Arrays, Functions)

// JavaScript has 3 main reference types :- Object (Stores data in key–value pairs), array (Ordered list of items) and functions (Code stored as a reusable value). Instead of storing actual value, JS stores memory address (reference). You copy the reference to the same memory location. changes in copy affect original. 

// Object - Stores multiple properties in key → value form. 
let me = {
    Name : 'Shibu Saransh', 
    Age : 24,
    isLearningToCode : true,
    isDepressed : 'Sometimes',
    willWin : true
}
console.log(me)
console.log(typeof me)
// Accessing property
console.log(me.Age, me.isLearningToCode)

// Array = Special type of object containing ordered elements.
const currentSkills = ['HTML', 'JS', 'Python', 'CSS']
console.log(currentSkills)
console.log(typeof currentSkills)
console.log(currentSkills[1]) // accessing a value inside it

// Function - A block of code treated as a value. Even though functions are objects internally, JavaScript gives them a special type: "function"
function greet() {
    console.log('Hello Friend')
}
greet()
console.log(typeof greet)

// Exercise
// An object with 5 properties about you - done as already learnt concept
// An array with 5 favorite skills or habits - done as already learnt concept
// A function that prints something motivational 😎
function motivation() {
    console.log(`Haar ke jeetne waale ko baazigar kehte hai`)
}
motivation()
