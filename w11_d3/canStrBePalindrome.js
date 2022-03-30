/* 
Interview Question:
Given a string
return whether or not it's possible to make a palindrome out of the string's characters
What is it about a string that makes it possible for it to be a palindrome?
Determine whether or not it is possible for the string's characters to be
rearranged into a palindrome.
  */

// racecar

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//            V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


// check length?
// {
  //     a: 3,
  //     d: 2
  // }
  // for in 
  // is Odd flag?
  // check odds/even? length?


const str6 = "abc";
const expected6 = false;

/* 
For a string to be able to be re-ordered into a palindrome
It must have an even occurrence of every character
Unless it is odd length, then it can have 1 character that
can have an odd number of occurrences.
Another way to look at it would be, if you cancel out ever char that has a pair,
it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

// -- Psuedo code --
// 1. create a function that takes in a string
// 2. create an object to keep track of character occurances
// 3. iterate through the string with a for loop
// 4.  on each character we add or increment that key in the hash table
// 5. get string length to determine the odd to even number ratio
// 6. iterate the hash table and check if that ratio is maintained
// 7. break if it is not
// 8. return true if it makes it all the way through



function canBecomePalindrome(str) { 
    let hashTable = {};
    for (let x = 0; x < str.length; x++) {
        if (hashTable.hasOwnProperty(str[x])) {
            hashTable[str[x]]++;
        }
        else {
            hashTable[str[x]] = 1;
        }
    }
    let canHaveOdd = str.length % 2 === 1 ? true : false;
    let oddCount = 0;
    for (const value in hashTable) {
        if (value % 2 === 1) {
            if (canHaveOdd && oddCount < 2) {
                oddCount++;
            }
            else {
                return false;
            }
        }
    }
    return true;
}


// function canBecomePalindrome2(str) 
// {
//     // console.log("********************")
//     const strLen = str.length       //Declare the length of the strength
//     if (strLen === 0) return false; //Just if the string is 0 it's not a palindromable by our standards
//     let hashTable = {}              //A hash table to hold all the letters
    
//     for(const letter of str)       //Go through each letter of the string
//         hashTable.hasOwnProperty(letter) ? hashTable[letter] += 1 : hashTable[letter] = 1;   //If the table has a property of letter increment it
    
//     // console.log(hashTable)   //Just a console log for a bit of code and test
//     const oddEven = {odd:0, even:0} //Even odd tracker Though we only really need odd
//     for(const key in hashTable)    //So we iterate through our hash table and add to even/odd accordingly
//         hashTable[key] % 2 === 0 ?  oddEven.even +=1 : oddEven.odd += 1
    
//     // console.log(oddEven)     //console log for a bit more code then test
//     return strLen %2 === 0 ? oddEven.odd === 0 : oddEven.odd === 1;
}

// canBecomePalindrome(str1);
// canBecomePalindrome(str2);
// canBecomePalindrome(str3);
// canBecomePalindrome(str4);
// canBecomePalindrome(str5);

//   console.log(canBecomePalindrome(str1) === expected1); // false
  console.log(canBecomePalindrome(str2) === expected2); // true
//   console.log(canBecomePalindrome(str3) === expected3); // true
//   console.log(canBecomePalindrome(str4) === expected4); // true
//   console.log(canBecomePalindrome(str5) === expected5); // true