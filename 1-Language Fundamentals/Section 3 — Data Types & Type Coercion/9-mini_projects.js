// 📌 3.9 — Section Review + Mixed Quiz + Mini Project

// Section 3 — Mixed Quiz (10 Questions)
console.log(typeof null); // object (legacy bug)
const a = [];
console.log(typeof a); // object
let x = 5;
let y = x;
y = 10;
console.log(x); // 5
console.log("10" - 3); // 7
console.log("10" + true); // 11
console.log(Boolean(" ")); // true - truthy value

let obj1 = { skill: "JS" };
let obj2 = obj1;
obj2.skill = "React";
console.log(obj1.skill); // React 

console.log(Number("100px")); // NaN

console.log([] == false); // true as loose check
console.log("5" === 5); // false

// Final Mini Project — Type Identifier Tool
const testValues = [
  5,
  "10",
  true,
  false,
  null,
  undefined,
  {},
  [],
  "Shibu",
  0,
  "0",
  NaN
];

testValues.forEach((value) => {
  console.log("Value:", value);
  console.log("Type:", typeof value);
  console.log("Truthy/Falsy:", Boolean(value) ? "Truthy" : "Falsy");
  console.log("String Conversion:", value + "");
  console.log("Number Conversion:", Number(value));
  console.log("-----------------------------");
});
