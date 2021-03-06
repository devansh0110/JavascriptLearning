//1. make {a:1, b:2, c:3} => [{a:1}, {b:2}, {c:3}]
let temp = { a: 1, b: 2, c: 3 };
console.log(Object.keys(temp).length);
console.log(Object.entries(temp));
var temp2 = Object.entries(temp).map(a => {
    var obj = {};
    obj[a[0]] = a[1]
    return obj
});
console.log(temp2);

//2. Merge two objects
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
let merged = { ...o1, ...o2, ...o3 };
console.log(obj, merged)

//3. Destructuring
let temp3 = { a: 1, b: 2, c: 3 };
let { a, b, c } = temp3;
console.log(a, b, c);
let [d, e, ...rest] = [10, 20, 30, 40, 50];
console.log(d, e, rest);



