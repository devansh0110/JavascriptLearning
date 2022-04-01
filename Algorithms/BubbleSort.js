/**
 * Logic: compare element with its next element and swap if needed. 
 * repeat interations until no swap is required => Array is sorted.
 */
function sort(array) {
    let lastSortedIndex = array.length;
    let sorted = false
    while (!sorted) {
        let swap = false;
        for (let j = 1; j < lastSortedIndex; j++) {
            if (array[j - 1] > array[j]) {
                swap = true;
                // console.log("swap", array[j - 1], array[j])
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                //console.log(array)
            }
        }
        if (!swap) {
            sorted = true;
            console.log("sorted array " + array)
            break;
        }
        lastSortedIndex--;
    }
    return array;
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