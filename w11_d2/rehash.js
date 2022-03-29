/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v

// psuedo code
// 1. make a variable that holds the array
// 2. make a for loop that iterates through the string
// 3. check for letters and numbers in the string
// 4. if letter, push letter to a new array as a key and the numbers as the value
// 5. if there are duplicate letters in the string, add the duplicate number to the letter in the array
// 6. sort the array in alphabetical order and return as a string.

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = { }
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

// function rehash(str) {
//   const newArr= [];
//   for(let i = 0; i<str.length; i++){
//   }
// }

function rehash(str) {
  const letterHashCounts = {};
  let numStr = "";
  let letter = str[0];

  for (let i = 1; i < str.length; i++) {
      const num = parseInt(str[i]);

      /**
       * Not Not a Number means it is a number. The below if is not an else b/c
       * both of these need to run on the last iteration since it ends on a num
       * we have to concat the num first so we finish processing the last letter
       * and it's corresponding numbers.
       */
      if (!isNaN(num)) {
          numStr += str[i];
      }

      // letter found, means we have passed digits or at end.
      if (isNaN(num) || i === str.length - 1) {
          const letterCount = parseInt(numStr);

          if (letter in letterHashCounts) {
              letterHashCounts[letter] += letterCount;
          } else {
              letterHashCounts[letter] = letterCount;
          }

          // reset for next letter and it's following digits
          letter = str[i];
          numStr = "";
      }
  }

  // console.log("letterHashCounts >>", letterHashCounts);
  // let x = Object.entries(letterHashCounts);
  // console.log(x.flat());


  const alphabetized = Object.keys(letterHashCounts).sort();
  console.log(">>>> alphabetized >> ", alphabetized);

  let newHash = "";

  // This could have been chained after the sort as a .forEach and then concat
  // the string, or .reduce instead to create the string to return.
  for (let i = 0; i < alphabetized.length; i++) {
      const letter = alphabetized[i];
      newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}

//   rehash(str1)

function rehash2(s) {
  const letterHashCounts = {};

  // This for loop could be a while loop. It doesn't increment up here because
  // we are incrementing inside it.
  for (let i = 0; i < s.length;) {
      // Retrieve letter at current index then increment to the num after.
      let char = s[i++];
      let numStr = "";

      /**
       * Look ahead to find potentially multiple digits after letter.
       * parseInt returns NaN if it fails to parse to a number.
       * We can't simply check for a truthy parsed int because 0 is falsy.
       * We can't use typeof because typeof NaN is "number". This is why we use
       * not Not a Number to check if we parsed a number.
       */
      while (i < s.length && !isNaN(parseInt(s[i]))) {
          numStr += s[i++];
      }

      if (letterHashCounts.hasOwnProperty(char)) {
          letterHashCounts[char] += parseInt(numStr);
      } else {
          letterHashCounts[char] = parseInt(numStr);
      }
  }

  const alphabetized = Object.keys(letterHashCounts).sort();

  let newHash = "";

  for (let i = 0; i < alphabetized.length; i++) {
      const letter = alphabetized[i];
      newHash += letter + letterHashCounts[letter];
  }

  return newHash;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");