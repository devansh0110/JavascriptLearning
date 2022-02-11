// this means: who called me?
// "this" is a object, that the function is a property of.
// it gives methods access to their object's other properties, or siblings
// it helps to keep the code DRY
function a() {
    console.log(this); //Global // here a = global.a() so a becomes property of global 
    // so this becomes object of global.
}

a();

function b() {
    'use strict' // it was introduced later to avoid common mistakes that can occure in javascript
    //all the ES6 modules uses use strict by default
    console.log(this); // undefined
}

b();

let obj = {
    name1: "Devansh",
    play: function () {
        console.log(this.name1 + " is playing cricket.")
    }
}

obj.play();
// Example 2
var name1 = 'Devansh';
function CallPerson() {
    console.log("Hi " + this.name1)
}


let obj1 = {
    name1: 'Ashwini',
    CallPerson: CallPerson
}
let obj2 = {
    name1: 'Kaxa',
    CallPerson: CallPerson
}

CallPerson();
obj1.CallPerson();
obj2.CallPerson();