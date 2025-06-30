// function formLargestNumber(arr) {

//     const sorted = arr.sort((a, b) => {
//         const ab = '' + a + b;
//         const ba = '' + b + a;
//         return ba.localeCompare(ab);
//     });
//     const result = sorted.join('');

//     return result[0] === '0' ? '0' : result;

// }
// const input = [3, 30, 34, 5, 9];
// formLargestNumber(input);

// // result - "9534330"

// Input: [54, 546, 548, 60]
// result: "6054854654"