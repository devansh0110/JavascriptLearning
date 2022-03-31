// JavaScript is weird.
//Example 1

//console.log(test); ReferenceError: test is not defined
function a() {
    test = 5; // At this point js will check if test exist in scope? if not it will store it at global level
    // If you 'use strict' it will throw error. 
    return test;
}
console.log(a())  // 5
console.log(test); // 5 

// Example 2
var fun = function func() {
    //func(); stack overflow
    console.log(func.arguments);
    console.log('fun');
}
fun(test);
 //func(); ReferenceError: func is not defined

