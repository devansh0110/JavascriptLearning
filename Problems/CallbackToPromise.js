const sqaureAsync = (number, cb) => {
  setTimeout(() => {
    return cb(number * number)
  }, 1000)
}

const addAsync = (value1, value2, cb) => {
  setTimeout(() => {
    return cb(value1 + value2)
  }, 1000)
}

const errorAsync = (cb) => {
  setTimeout(() => {
    return cb(new Error('Whoops!'))
  }, 1000)
}

const fnToCOnvertCBToPromise = (func) => {
  return function (...params) {
    return new Promise((resolve, reject) => {
      func(...params, (data) => {
        console.log(data instanceof Error)
        if (data instanceof Error)
          reject(data)
        else
          resolve(data)
      })
    });
  }
}

let sqaureAsyncPromise = fnToCOnvertCBToPromise(sqaureAsync);
let addAsyncPromise = fnToCOnvertCBToPromise(addAsync);
let errorAsyncPromise = fnToCOnvertCBToPromise(errorAsync);

// Function with Single Argument
sqaureAsyncPromise(6).then((data) => { console.log(data) });
// Function with multiple Argument
addAsyncPromise(6, 6).then((data) => { console.log(data) });
// Function with error
errorAsyncPromise().then((data) => { console.log(data) }).catch(error => console.error("error", error));;


