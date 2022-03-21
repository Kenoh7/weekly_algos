/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// psudeo code
// 1. Make 2 loops
// 2. iterate through loop, one incrementing, and one decrementing
// 3. make conditional to add diagnally through the array
// 4. sum both totals and subtract them
// 5. difference will be a positive number

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
// const expected1 = 2;

// const arr = [10,   50,    99,    11];

function diagonalDifference(sqrMatrix) { 
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < sqrMatrix.length; i++){
        sum1 += sqrMatrix[i][i]
    }
    for (let j = 0; j < sqrMatrix.length ; j++ ){
        sum2 += sqrMatrix[j][sqrMatrix.length - 1 - j]
    }
    return Math.abs(sum1 - sum2)
}   

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));



// function diagonalDifference(sqrMatrix) {
//     let diagonalSum1 = 0
//     let diagonalSum2 = 0
//     const matrixLength = sqrMatrix.length
//     for (let i = 0; i < matrixLength; i++) {
//         diagonalSum1 += sqrMatrix[i][i]
//         diagonalSum2 += sqrMatrix[i][sqrMatrix.length - 1 - i]
//     }
//     // return Math.abs(diagonalSum1 - diagonalSum2)
//     let diagonalDiff = diagonalSum1 - diagonalSum2;
//     return (diagonalDiff >= 0) ? diagonalDiff : - diagonalDiff
// }

// console.log(diagonalDifference(squareMatrix1));
// console.log(diagonalDifference(squareMatrix2));

/* 
// left to right diagonal: 1 + 5 + 9 = 15
// right to left diagonal: 3 + 5 + 9 = 17
// absolute difference = 2
// */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/


function diagonalDifference(sqrMatrix) { }