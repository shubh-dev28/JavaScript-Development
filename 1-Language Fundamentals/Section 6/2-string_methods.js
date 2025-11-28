// ⭐ 5.2 — Essential String Methods

// A method is simply a pre-built action that JavaScript gives you to perform some operation on a string. basically doing some kind of operation on data type.

// .length count the total character in string including space. minimum password length
console.log('Shibu'.length)
// .toUpperCase() and toLowerCase(). Convert input to lowercase before checking
console.log('Shibu'.toUpperCase(), 'Saransh'.toLowerCase()) 
// .trim() - Removes extra spaces from both sides and not in between characters. accidental spaces while entering emails or phone numbers.
console.log('   Shibu  Saransh     '.trim())
// .includes() - Checks if a word/character exists inside string. returns boolean. Email validation (@ check)
console.log('Shibu Saransh'.includes('Shi'))
// .indexOf() - Returns the position of a character or word. If not found, returns -1. only return index value of first character. 
console.log('Shibu Saransh'.indexOf('ransh'))
// .replace() - Replaces part of a string. Only replaces first match.
let place = 'Bihar'
console.log(place.replace('Bihar','India'))

// Practical Real-Life Example
let emailInput = "  SHIBU@GMAIL.COM   ";

emailInput = emailInput.trim().toLowerCase(); // multiple methods chaining

if (emailInput.includes("@")) {
  console.log("Valid Email:", emailInput);
} else {
  console.log("Invalid Email");
}

// Exercises
// Exercise 1 — Practice Methods
let note = " I will become a high paying remote developer "
// Print original length
console.log(note.length)
// Print trimmed version
console.log(note.trim())
// Print trimmed version in uppercase
console.log(note.trim().toUpperCase())
// Check if note includes "remote"
console.log(note.includes('remote'))
// Replace "remote" with "freelance"
console.log(note.replace('remote','freelance').trim())

// Exercise 2 — Searching & Indexing
let username = "SuperShibuHero";
console.log(username.indexOf('Shibu')) // even just writting Sh will also work
console.log(username.includes('Hero'))

// Exercise 3 — Small Task
let fullName = "Shibu Saransh";
console.log(`First name is ${fullName.slice(fullName.indexOf('Sh'),fullName.indexOf('u') +1)}`) // smart guy
// same can be done for last name too

// Quiz
// start and end space
// boolean
// -1
// A