// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional property designation and a method getDetails to display the employee details.

function person(name,age){
  this.name = name;
  this.age= age;
  this.sayHello = function (){
     console.log(`Welcome ${this.name} in PW skills have a good day`);
  }
}

function Employee(name,age,designation){
  person.call(this,name,age);

  this.designation = designation;
  this.getdetails = ()=>{
    console.log(`Employee : ${this.name}, Age:${this.age}, designation : ${this.designation}`)
  }
}

const employee1 = new Employee("apurva",23,"Software Developer");

employee1.getdetails();
