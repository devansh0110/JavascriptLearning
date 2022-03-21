function loop() {
    for (var i = 0; i < 5; i++) { // if we use i without initializing, it will create global var
        console.log(i);
    }
    console.log("final", i);
    for (let j = 0; j < 5; j++) {
        console.log(j);
    }
    // console.log(j); //Block Scope : ReferenceError: j is not defined
}
loop();
//console.log("Final", i); //Functional Scope : ReferenceError: i is not defined


// Context is how the function is invoked: b.method(); context is b// or value of this 
// Scope is visibility of variables