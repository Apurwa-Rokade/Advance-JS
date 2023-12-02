let num1 =10;
let num2=20;
let output='';

for(let i=num1;i<=20;i++)
{
   output =output +
   (  (output === '')? i : ',' +i);

}
console.log(output);