// ⭐ 4.6 — Operator Precedence & Expression Evaluation

// How JavaScript decides what to execute first in case of long expression with multiple operand and operator. 10 + 5 * 2 - 4 / 2. 

// priority list for operators. Higher precedence operations run earlier in an expression. 
// Order = () > ** > */% > +- > comparision > logical. in case of same priority expression, evaluation is done from left to right except in case of ** where R to L is done.
console.log(10 - 3 + 2); // l to r evaluation
// Comparison + Logical
console.log(10 + 2 > 15); // 12>15 = false. first arthematic and then comparision
// Parentheses
console.log((10 + 2) > 15); // false. even worked without paranthesis
console.log(10 + (2 > 15)); // 10 + false → 10 + 0 → 10. () fully changed the game. first it compare and return false and then type coesion get performed and so a number 10 is the output

console.log(1 + "2" + 3); // "123". left to right evaluation. first 1 convert to string and then 3
console.log(1 + 2 + "3"); // "33". L to R execution. first addition of num and then string concatenation.

// Mini Challenge
let a = 10;
let b = 5;
let result = a + b * 2 > 20 && (a - b) * 3 == 15; // first arthematic. 20 > 20 && 15 == 15. Then comparision. false && true => false
console.log(result);