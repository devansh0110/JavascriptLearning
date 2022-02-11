//The JavaScriptCore engine has hard-coded argument limit of 65536.
// Do not send more than that params

// Call Apply and Bind all are used for function borrowing
let wizard = {
    name: 'Harry Potter',
    health: 100,
    heal: function (amount, amount2) {
        this.health += amount + amount2;
    }
}

let archer = {
    name: 'Bill',
    health: 50
}

console.log(archer);
wizard.heal.call(archer, 10, 20); // takes arg in comma separated values
console.log(archer);
wizard.heal.apply(archer, [10, 20]); // takes one arg in array
console.log(archer);
wizard.heal.bind(archer, 10, 20)(); // It returns a function or callable
console.log(archer);