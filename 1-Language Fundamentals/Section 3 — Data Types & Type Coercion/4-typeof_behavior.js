// 3.4 — typeof Operator (Weird Behaviours!)

// some weird cases = typeof null - object (legacy bug). null is not an object → It just returns "object" by mistake, typeof NaN - number, typeof array is object as Arrays are specialized objects. typeof function(){} - function as Functions are callable objects with special type. typeof undefined - undefined. it matters if u check conditions. 

// Check your understanding
console.log(typeof undefined); // undefined 
console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function(){}); // function

// Exercise
// Write the above 6 examples - done
// Add your explanation in comments for each result - done indirectly. 
// Add 3 more weird tests of your own 
// 3 Additional Weird typeof Tests:
console.log(typeof Infinity); // number - Infinity is considered a number
console.log(typeof (1/0)); // number - Division by zero gives Infinity, which is a number
console.log(typeof new Date()); // object - Date constructor creates an object, not a "date" type
// Print all outputs in console - done
console.log(typeof typeof 5); // string. as typeof 5 is 'number' which is string as quoted. 