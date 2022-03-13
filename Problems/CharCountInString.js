////1. Occurrence of character in string 
let str = "abc abc abc abc cbd cbd cbd nad.";
let arr3 = Array.from(str); // convert string char array

let fristChar = arr3[0];  // get first char

// set counter
let count = 0;
// Loop through arr and compare the char
arr3.forEach(char => {
    // Comparision 
    if (char === fristChar)
        count++;
});

// Display output;
console.log(count);