const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }
  