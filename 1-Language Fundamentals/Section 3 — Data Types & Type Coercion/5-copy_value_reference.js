// 3.5 — Copy by Value vs Copy by Reference

// 1️⃣ Primitive Types → Copy by Value. The actual value is copied. Both variables are independent. 
let x = 12
let y = x
x = 77
console.log(x,y)

// 2️⃣ Reference Types → Copy by Reference. Only the reference (memory address) is copied. Both point to same location. 
let array1 = [1,2,3,4,5,6]
let array2 = array1
array2.pop()
console.log(array1) // it will get modified too as both pointing to same reference object.

// How to Fix Reference Copy Bug
// Use a clone instead of direct assignment. 
let obj1 = { name: "Shibu" };
let obj2 = { ...obj1 }; // spread operator
obj2.name = "Developer";
console.log(obj1)
console.log(obj2) // obj2 act as a copy, not reference. and so no change in obj1.
// same way works for array too
let array_ = {...array1} // this will basically convert the array into object. interesting finding btw.
let array3 = [...array1]
array1.push(55)
console.log(array1)
console.log(array3) // Now each variable has its own memory

// Exercise
// Show copy by value using a number = done
// Show copy by reference using an object - done
// Fix reference issue by using spread operator - done
// Print results with explanation comments - done