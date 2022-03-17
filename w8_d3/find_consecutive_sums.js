// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

// psuedo code
// 1. create a variable that holds a empty array
// 2. create a loop that iterates through the array
// 3. create a variable that holds the total index
// 4. create another loop where j equals i
// 5. create a if check, if equal to 16 then push to output

function findConsecutiveSums(arr, k) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let total = 0;
        for (let j = i; j < arr.length; j++) {
            total += arr[j]
            if (total === k) {
                newArr.push(arr.slice(i, j+1));
            }
        }
    }
    return newArr;
}

    // // loop the array
    // for (let i = 0; i < arr.length; i++) {
    //     // create a consecutive sum array
    //     const consecNums = [];
    //     // and a rolling sum
    //     let sum = 0;
    //     // starting at i
    //     let j = i;
    //     // loop until the sum is less than k or we read off the end of arr
    //     while (sum <= k && j < arr.length - 1) {
    //         // if sum + j is still smaller, add it
    //         if (sum + arr[j] <= k) {
    //             sum += arr[j];
    //             consecNums.push(arr[j])
    //             j++;

    //             // if sum is equal to k now, push
    //             if (sum === k) {
    //                 sums.push([...consecNums]);
    //                 // [3, 6, 7]
    //                 // [3, 6, 7, 0]
    //             }
    //         } else {
    //             // if the next number is so large that the sum becomes larger than k, break
    //             break;
    //         }
    //     }
    // }
    // return sums;

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));

