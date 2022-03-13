const sqaureAsync = (number, cb) => {
    setTimeout(() => {
        return cb(number * number)
    }, 1000)
}

const sqaureAsArray = [sqaureAsync, sqaureAsync, sqaureAsync];
compositeFunction(sqaureAsArray, 2); // This is equivalent to sqaureAsync(sqaureAsync(sqaureAsync(2)));

function compositeFunction(sqaureAsArray, data) {
    sqaureAsArray[0](data, (resp) => {
        sqaureAsArray.shift();
        data = resp;
        if (sqaureAsArray.length == 0) {
            console.log(resp);
        } else {
            console.log('callback', resp);
            compositeFunction(sqaureAsArray, resp)
        }
    })
}