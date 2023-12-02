function functionasARG(fn)
{
    fn();
    return 2*2;
}

console.log(functionasARG(function (){
    console.log("Calling function");
}))