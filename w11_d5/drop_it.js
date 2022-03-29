/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//                     v

// psuedo code
// 1. 

// const arr1 = [1, 4, 3, 6, 9, 3];
// const callback1 = (elem) => {
//     return elem > 5;
// };
// const expected1 = [6, 9, 3];

// const arr2 = [1, 4, 3, 6, 9, 3];
// const callback2 = (elem) => {
//     return elem > 2;
// };
// const expected2 = [4, 3, 6, 9, 3];

// const arr3 = [1, 4, 3, 6, 9, 3];
// const callback3 = (elem) => false;
// const expected3 = [];

const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

function dropIt(arr, callback) {
    let start=0, end=arr.length-1;
    while(start<end){
        const temp=arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    for(let i = arr.length-1; i>=0; i--){
        if(callback(arr[i])){
            break;
        }else{
            arr.pop();
        }
    }
    start = 0;
    end=arr.length-1;
    while(start<end){
        const temp=arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

// function dropIt(arr, callback) {
//     const newArr = [];
//     let flag=false;
//     let index = 0;
//     for(let i=0; i < arr.length; i++){
//         if(callback(arr[i])){
//             flag=true;
//             index=i;
//             break;
//         }
//     }
//     if(flag){
//         for (let i=index; i<arr.length; i++){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }





console.log(dropIt(arr1, callback1));
// console.log(dropIt(arr2, callback2));
// console.log(dropIt(arr3, callback3));