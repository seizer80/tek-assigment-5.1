

// function maxOfThree(a, b, c) {
//     if ((a >= b) && (a >= c)) {
//         return a;
//     } else if ((b >= a) && (b >= c)) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(maxOfThree(4535, 40, 30));

// function isCharAVowel(character) {
//     character = character.toUpperCase();
//     if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U") { return true }
//     return false;
// }

// console.log(isCharAVowel('a'));



// function sumArray(array) {

//     let sum = 0;
//     array.forEach(num => {
//         sum += num;
//     });
//     return sum;
// }

// console.log(sumArray([20, 200, 15, 10]));

// function multiplyArray(array) {

//     let sum = 1;
//     array.forEach(num => {
//         sum *= num;
//     });
//     return sum;
// }

// console.log(multiplyArray([3, 4, 10, 10]));

// const numArgs = function (...args) {
//     return args.length;
// }

// console.log(numArgs(3, 4, 5, 7, 5, 3, 5, 3, 5, 2));




// function reverseString(array) {
//     let new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         new_array[i] = array[array.length - i - 1];
//     }
//     return new_array;
// }

// console.log(reverseString('rockstar'));

// function reverseString(array) {

//     let newArray = "";
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArray += array[i];
//     }
//     return newArray;
// }
// console.log(reverseString('rockstar'));

// function reverseString(array) {
//     let newArray = "";
//     for (i = array.length - 1; i >= 0; i--) {
//         newArray += array[i]
//     }

//     return newArray;

// }
// console.log(reverseString('rockstar'));



// const longestStringInArray = function (strings) {
//     let array = 0;
//     strings.forEach(str => {
//         if (str.length > array) {
//             array = str.length;
//         }
//     });
//     return array;
// }

// console.log(longestStringInArray(["hello", "English ", "good ", "fantastic", "good job"]));


// function stringsLongerThan(strings, num) {
//     let longerStrings = [];
//     strings.forEach(str => {
//         if (str.length > num) {
//             longerStrings.push(str);
//         }
//     });
//     return longerStrings;
// }

// console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));




const addList = function (...nums) {
    let sum = 0;
    nums.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log(addList(-5, 2, 60, 123))
console.log(addList())