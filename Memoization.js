function addTo50(n) {
    console.log('long time...')
    return n + 50
}
console.log('11.',addTo50(5));
console.log('12.',addTo50(5));
console.log('13.',addTo50(5));
// long time... 55
// long time... 55
// long time... 55

// Memoized Way
function memoizedAddTo50() {
    let cache = {}
    return function (n) { // closure to access cache obj
        if (n in cache) {
            return cache[n]
        } else {
            console.log('long time...')
            cache[n] = n + 50
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo50()
console.log('1.', memoized(5))
console.log('2.', memoized(5))
console.log('3.', memoized(5))
console.log('4.', memoized(10))