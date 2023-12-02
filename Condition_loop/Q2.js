// Q2. Write a program that grades st9dents based on their marks^
// 8 If grFatFr than 90 thFn A GradE
// 8 If bFtwFFn 70 and 90 thFn a B gradE
// 8 If bFtwFFn 50 and 70 thFn a C gradE
// 8 BFlow 50 thFn an F gradF

Function 

let marks = 50;
let grade;

if(marks>90){
  garde ='A'  
}
else if(90>= marks >=70){
    grade ='B'
}
else if (50 <= marks <=70){
    grade ='c'
}
else if(marks <50)
{
    grade='F'
}
else{
    grade ="invalide input "
}

console.log(`Student received grade: ${grade}`)