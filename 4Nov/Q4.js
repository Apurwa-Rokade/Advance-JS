// Understanding the precedence and associativity of operators in JavaScript is crucial.

// Precedence: Determines the order of operation execution. 
// For example, * has higher precedence than +,so 2 + 3 * 4 evaluates as 2 + (3 * 4).

let result = 2 + 3 * 4; // Multiplication (*) has higher precedence
// result will be 14, as multiplication is performed before addition

// Associativity: Defines the evaluation order for operators with the same precedence. 
// For instance, addition and subtraction are left-associative, so 6 - 3 + 2 computes as (6 - 3) + 2.

let Associativityresult = 6 - 3 + 2; // The result will be 5 (Left to right evaluation for subtraction and addition)
