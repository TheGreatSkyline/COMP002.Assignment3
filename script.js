// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// Create a function called min that takes two numbers and returns the smallest one of the pair.
function min(a, b) {
    // return the smallest one of the pair
    return (a < b) ? a : b;
    // ternary checks if a is less than b
    // if it is, return a
    // if not, return b 
  }
  
  // Example usage
  console.log(min(5, 10)); // Outputs: 5
  console.log(min(20, 15)); // Outputs: 15
  
// console.log(min(5, 10)); // will output 5.
// console.log(min(20, 15)); // will output 15

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// Created a function that takes the radius of a circle and outputs it’s approximate circumference 
function getCircumference(radius) {
    // make a const variable for pi
    const pi = 3.14;
    // return the circumference
    return 2 * pi * radius;
  }
  
  // Example usage
  console.log(getCircumference(5)); // Outputs: 31.4
  console.log(getCircumference(10)); // Outputs: 62.8
  
// console.log(calculateCircumference(5)); // will output 31.4

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// Create a function called searchString that takes a character and then returns how many times it appears in another string argument.

function countCharInString(char, str) {
    // make a const variable for count
    let count = 0;
    // loop through the string
    for (let i = 0; i < str.length; i++) {
      // loop through the string
      if (str[i] === char) {
        // increment count
        count++;
      }
    }
    return count;
  }
  
  
  // Example usage
  console.log(countCharInString('p', 'mississippi')); // Outputs: 2
  console.log(countCharInString('o', 'mississippi')); // Outputs: 0
  
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
