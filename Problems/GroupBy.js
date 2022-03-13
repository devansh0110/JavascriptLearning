//1. GroupBy
let arr4 = [{ name: 'a', dept: 'IT' }, { name: 'b', dept: 'Admin' }, { name: 'c', dept: 'IT' }];
//O/p {IT:[{name:”a”,dept:”IT”},{name:”c”,dept:”IT”}],”Admin”:[{name:”b”,dept:”Admin”}]};

let output = {};

arr4.forEach(val=>{
    if(output[val.dept]){
        output[val.dept].push(val);
    } else {
        output[val.dept] = [val]; 
    }
})

console.log(output);