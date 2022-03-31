// This is not lexically bind but dynamically bind
let obj = {
    name: "Devansh",
    play: function () {
        console.log('play', this.name); // this = obj
        var oneStepDeep = function () {
            console.log('oneStepDeep', this.name); // this = global
        }
        oneStepDeep()
    }
}
obj.play()

//solution 1
let obj2 = {
    name: "Devansh",
    play: function () {
        console.log('play', this.name); // this = obj
        var oneStepDeep = function () {
            console.log('oneStepDeep', this.name); // this = obj
        }
        oneStepDeep.bind(this)(); // due to bind function this = obj
        //oneStepDeep.call(this); this will also work
    }
}
obj2.play()

//solution 2 : use arrow function

// solution 3 : save reference in variable