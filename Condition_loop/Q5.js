//Numbers in ascending order

let ascending = 1;
let output=''
while (ascending <= 25) {
 output = output +
  ((output=='')?
    ascending:','+ascending)
    ascending ++;
}

console.log(output)

//Numbers in descending order

let descending = 25;
let result =''
while (descending >= 1) {
result += (result ==='') ? descending  :','+descending;
descending--;
}
console.log(result);
