// macroTasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
// microTasks ( Higher priority): Promises, process.nextTick, queueMicrotask, MutationObserver
process.nextTick(() => { console.log('process.nextTick') });

console.log('Console log');

setImmediate(() => { console.log('SetImmediate') });

setTimeout(() => { console.log('setTimeout without time 1') });

let interval = setInterval(doStuff, 0);
function doStuff() {
    console.log('setInterval');
    clearInterval(interval);
}

setTimeout(() => { console.log('setTimeout with zero sec') }, 0);

setTimeout(() => { console.log('setTimeout without time 2') });

call('simple function 1');

function call(data) {
    console.log(data)
}

Promise.resolve()
    .then(console.log('Promise.resolve 1'))
    .then(setTimeout(() => { console.log(' Set timeout in Promise.resolve') }))
    .then(console.log('Promise.resolve 2'))
    .then(console.log('Promise.resolve 3'))
    .then(console.log('Promise.resolve 4'));

call('simple function 2');