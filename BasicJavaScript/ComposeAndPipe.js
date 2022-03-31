const multiplyBy5 = (num) => num * 5;
const devideBy10 = (num) => num / 10;

const composite = (f, g) => (num) => f(g(num)); 
const pipe = (f, g) => (num) => g(f(num));

console.log(composite(multiplyBy5, devideBy10)(100))
console.log(pipe(multiplyBy5, devideBy10)(200))