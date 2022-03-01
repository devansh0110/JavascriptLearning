// Example of Shallow copy/clone
const user = {
    name: 'Raj',
    location: {
        city: 'NY',
        state: 'NY'
    }
};
const copy = user
const copy2 = Object.assign({}, user);
const copy3 = { ...user };
user.location.city = 'Albany';
user.name = 'Dev';
console.log('original: ', user);
console.log('copy:', copy);
console.log('copy2:', copy2);
console.log('copy3:', copy3);


const number = 100
const string = "Jay"
let obj1 = {
    value: "a"
}
let obj2 = {
    value: "b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2, obj3) {
    number = number * 10;
    string = "Pete";
    console.log('inside1: ', obj1);
    obj1 = obj2; //  you can't reassign the reference to a different object within the function.
    obj2.value = "c";
    console.log('inside: ', obj1);
    console.log('inside: ', obj2);
    console.log('inside: ', obj3);
}

change(number, string, obj1, obj2, obj3);

//Guess the outputs here before you run the code: 
console.log(number);
console.log(string);
console.log(obj1);
console.log(obj2);
console.log(obj3);