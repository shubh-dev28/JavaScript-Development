let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";
let allChars = uppercase + lowercase + numbers + symbols;
let length = 12
let password = ''
// we will choose any character from allChars
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
password+=allChars[Math.floor(Math.random()*allChars.length)]
console.log(password) // works