// Function are fully hoisted
// Var are partially hoisted
// Let and Const will give reference error/ Stored in Temporal Dead Zone

// Hoisting will be done in every execution context created. 
//for every function call there will be new execution context created.

console.log(a);
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
fun1();
//fun2(); its undefined so not a function
//fun3(); its undefined so not a function

var a = 1;
let b = 2;

// Function declaration
function fun1() {
    console.log(a, 'fun1');
   // console.log(b, 'fun1');
}

// Function Expression
var fun2 = function () {
    var c = 3;
    console.log(a,'fun2');
    console.log(b, 'fun1');
}

var fun3 = () => console.log('fun3');

console.log(typeof (fun1))
console.log(typeof (fun2))
console.log(typeof (fun3))
fun2();
fun1();

