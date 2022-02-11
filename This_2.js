let a = function () {
    console.log('a', this); //global
    let b = function () {
        console.log('b', this); //global
        let c = {
            hi: function () {
                console.log('c', this); //object c
            }
        }
        c.hi(); //hi is called by c so this inside hi will refer to c
    }
    b();
}
a();