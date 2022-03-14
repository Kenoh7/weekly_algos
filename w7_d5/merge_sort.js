// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
    // return arrays of single values
    if (arr.length < 2) {
        return arr;
    }

    // get the middle index, floor it to prevent floats
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // mergeSortedArray called on the result of mergeSort left and right
    //                              v
    //                              88                22
    return mergeSortedArrays(mergeSort(left), mergeSort(right)); // A function call is equal to what that function returns
}


// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
// test mergeSortedArrays(arr1, arr2) by passing test cases
//                   l
var mergeArr2 = [55,66];
//                      r
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
// function mergeSortedArrays(arr1, arr2) {
//     // setup
//     let sortedArr = [];
//     let leftIdx = 0;
//     let rightIdx = 0;

//     // check the lengths
//     // push to sortedArr

//     return sortedArr;

function mergeSortedArrays(arr1, arr2) {
    let sort = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            // shift pops from the front, not ideal.
            sort.push(arr1.shift());
        } else {
            sort.push(arr2.shift());
        }
    }

    // takes remainders and squashes them together in cases with one array
    return sort.concat(arr1.slice().concat(arr2.slice()));
}
//  }

//  function mergeSortedArrays(arrLeft, arrRight) { 
//     const returnArr = [];
//     let leftIdx = 0;
//     let rightIdx = 0;
//     while (leftIdx < arrLeft.length || rightIdx < arrRight.length){
//         if (arrLeft.length <= leftIdx){
//             return [...returnArr, ...arrRight.slice(rightIdx)]
//         }
//         if (arrRight.length <= rightIdx){
//             return [...returnArr, ...arrLeft.slice(leftIdx)]
//         }
//         if (arrLeft[leftIdx] < arrRight[rightIdx]){
//             returnArr.push(arrLeft[leftIdx]);
//             leftIdx++;
//         }
//         else if (arrRight[rightIdx] < arrLeft[leftIdx]){
//             returnArr.push(arrRight[rightIdx]);
//             rightIdx++;
//         }
//     } 
//     return returnArr;
// }

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a COPY of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);


// function a() {
//     a();
// }

// a();

// 5!
// 5*4*3*2*1

// 4!
// 4*3*2*1

// 2!
// 2*1

// function factorial(num){
//     // 1. base case - BREAK POINT
//     if (num === 1) {
//         return 1
//     }
//     // 2. logic
//     // let factNum = num - 1;

//     // recurse - return the function
//     return num * factorial(num - 1)

// }