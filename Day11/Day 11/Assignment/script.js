// Problem 1: Create a Student Management System (Using Objects)

(function () {
    const student = {
        name: "Aryan Kumar",
        rollNumber: 101,
        marks: {
            Math: 80,
            Science: 65,
            English: 50,
            History: 70
        },
        getAverageMarks: function () {
            let avg = (this.marks.Math +
                this.marks.Science +
                this.marks.English +
                this.marks.History) / 4;
            return avg;
        },
        checkPassOrFail: function () {
            let avg = this.getAverageMarks();
            if (avg > 40) {
                console.log("Passed");
            } else {
                console.log("Failed");
            }
        }
    };
    console.log(student.getAverageMarks());
    student.checkPassOrFail();
})()









// Problem 3: Generate Multiplication Table (For Loop) Task:
// Write a function generateTable(num, limit) that prints the multiplication table of a given num up to limit.

function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num}*${i}=${num * i}`)
    }
}
generateTable(5, 3);






// Problem 4: FizzBuzz (If-Else Conditions)
// function fizzbuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("fizzbuzz")
//         } else if (i % 3 == 0) {
//             console.log("fizz")
//         } else if (i % 5 == 0) {
//             console.log("buzz")
//         } else {
//           console.log(i)
//         }
//     }
// }
// fizzbuzz(30)










// Problem 5: Reverse a String Without Using .reverse()
// Task:
// Write a function reverseString(str) that takes a string and reverses it without using .reverse() method.
// Example:

function reverseString(word) {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse = reverse + word[i];
    }
    return reverse;
};
console.log(reverseString("JavaScript"));













// Problem 6: Remove Duplicates from an Array
// Task:
// Write a function removeDuplicates(arr) that removes duplicate elements from an array without using Set()


function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));













// Problem 7: Find the Longest Word in a Sentence
// Task:
// Write a function longestWord(sentence) that finds the longest word in a given sentence.
// Example:
function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// Example usage
console.log(longestWord("Coding is amazing and challenging")); // Output: "challenging"















//   Problem 8: Custom Array Method (Creating Your Own .map())
// Task:
// JavaScript has a built-in .map() method, but can you create your own version of it? Write a function
// myMap(arr, callback) that takes an array and a callback function and applies the callback to each
// element.
// Example:

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
function myCallback(x) {
    return x * 2;
}
console.log(myMap([1, 2, 3, 4], myCallback));












// Problem 9: Find the First Non-Repeating Character in a String
// Task:
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given
// string.
// Example:
// console.log(firstUniqueCharacter("aabbcddce")); 

function firstUniqueCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null; 
}

console.log(firstUniqueCharacter("aabbcddce")); 
  