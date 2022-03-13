//1. Remove First, last element from Array
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr2.shift(); // First
arr2.pop(); // Last
console.log(arr2);

//2. Remove nth element from array 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2, 1);

console.log(arr)