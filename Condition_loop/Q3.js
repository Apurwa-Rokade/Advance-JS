// 1)for Loop:
// Syntax:
for (initialization; condition; increment/decrement) {
    // Code to be executed
  }
// Example:
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// This loop initializes a variable i to 0, executes the code block as long as i is less than 5, 
// and increments i by 1 in each iteration.

// 2) while Loop:

// Example :
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while Loop:
// Example :

let a = 0;
do {
  console.log(a);
  i++;
} while (a < 5);



const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }
  