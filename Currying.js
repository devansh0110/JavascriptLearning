var sum = function (a) {
    return function(b) {
        if(b){
            return sum(a+b);
        }
        else 
        return a;
    }
}

console.log(sum(10)(20)(30)(40)(50)())