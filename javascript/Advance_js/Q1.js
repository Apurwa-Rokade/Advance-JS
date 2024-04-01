// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person.

function  person(name,age)
{

 
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
  
}

let person1 = new person("apurva",23);

person1.sayHello();