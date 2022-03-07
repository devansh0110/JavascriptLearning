// Factory Function
function personFun(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    return person;
  }

  // Constructor Function
  function PersonCon(name, age) {
    this.name = name;
    this.age = age;
  }

let devansh = new PersonCon('Devansh', 28);
let ashwini = personFun('Ashwini', 28);

console.log(devansh, ashwini);
//PersonCon { name: 'Devansh', age: 28 } { name: 'Ashwini', age: 28 }

console.log(devansh.__proto__ === PersonCon.prototype) // true
console.log(ashwini.__proto__ === personFun.prototype) // false
console.log(ashwini.__proto__ === Object.prototype) //true

console.log(devansh instanceof PersonCon) // True
console.log(devansh instanceof Object) // True
console.log(ashwini instanceof personFun) // false
console.log(ashwini instanceof Object) // True