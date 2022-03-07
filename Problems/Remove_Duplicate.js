let arr= [1,1,2,2,3,3];

// Solution 1: using keyed collection Set
console.log([...new Set(arr)]);

// Solution 2: using filter and Index

console.log(arr.filter((val, ind, arr)=>{
    return ind == arr.indexOf(val);
}))

// Solution 3: Foreach and includes
var unique = [];
arr.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
});
console.log(unique);