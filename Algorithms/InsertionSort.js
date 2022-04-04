/**
 * Logic : 
 */
function sort(array) {
    for (let i = 1; i <=  array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[j+1] < array[j]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log("sorted array " + array)
    return array;

    // console.log(array, minimum, indexOfmin)
    //   console.log(array)
}


const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
const negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];

sort(sortedArr);
sort(reverseArr);
sort(notSortedArr);
sort(equalArr);
sort(negativeArr);
sort(negativeArrSorted);

module.exports = { sort }