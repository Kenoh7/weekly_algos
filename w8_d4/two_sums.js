// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]

// psuedo code
// 1. make two for loops
// 2. make a empty variable to hold the index
// 3. create if checks to make sure numbers in array are less than the target
// 4. push index's to the empty array
// 5. return the array


function twoSums(arr, target) {
    let total = [];
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i] < target){
            for(let j = i+1; j < arr.length; j++){
                if(arr[j] < target){
                    if(arr[i] + arr[j] === target){
                        total.push(i);
                        total.push(j);
                    }
                }
            }
        }
    }
    return total
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
