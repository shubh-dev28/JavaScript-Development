// 3.6 — Truthy & Falsy Values

// every value becomes either :- true → if it's truthy, false → if it's falsy when used in conditions. 
// Falsy Values (Only 8!) = behave as false.

// The 8 Falsy Values in JavaScript:
// 1. false - the boolean false
// 2. 0 - the number zero
// 3. -0 - negative zero
// 4. 0n - BigInt zero
// 5. "" or '' or `` - empty string
// 6. null - null value
// 7. undefined - undefined value  
// 8. NaN - Not a Number

// Everything else is truthy!. Anything NOT in this list is truthy. 'shibu', true, '0' etc all are truthy. it shows when we try to change it to booleans
console.log(Boolean(false))     // false - 1. boolean false
console.log(Boolean(0))         // false - 2. number zero
console.log(Boolean(-0))        // false - 3. negative zero
console.log(Boolean(0n))        // false - 4. BigInt zero
console.log(Boolean(""))        // false - 5. empty string
console.log(Boolean(null))      // false - 6. null value
console.log(Boolean(undefined)) // false - 7. undefined value
console.log(Boolean(NaN))       // false - 8. Not a Number

// Examples of Truthy Values (Everything else!)
console.log(Boolean("shibu"))   // true - non-empty string
console.log(Boolean("0"))       // true - string "0" is NOT number 0
console.log(Boolean(1))         // true - any non-zero number
console.log(Boolean(-1))        // true - negative numbers (except -0)
console.log(Boolean(true))      // true - boolean true
console.log(Boolean({}))        // true - empty object is truthy
console.log(Boolean([]))        // true - empty array is truthy
console.log(Boolean(function(){})) // true - functions are truthy
console.log(Boolean(Infinity))  // true - Infinity is truthy
console.log(Boolean("false"))   // true - string "false" is truthy!

// Exercise
// Create an array of 20 values (mix truthy + falsy)
let mixedValues = [
    false,          // falsy
    "hello",        // truthy
    0,              // falsy
    42,             // truthy
    "",             // falsy
    "0",            // truthy
    null,           // falsy
    {},             // truthy
    undefined,      // falsy
    [],             // truthy
    NaN,            // falsy
    "false",        // truthy
    -0,             // falsy
    -5,             // truthy
    0n,             // falsy
    true,           // truthy
    Infinity,       // truthy
    function(){},   // truthy
    " ",            // truthy (space is not empty)
    Symbol()        // truthy
];
