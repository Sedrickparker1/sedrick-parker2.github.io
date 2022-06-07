// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
 let reverse = input => input.split('').reverse().join('');

function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
  // make the string an array , aka the split method..so we can use the reverse method 
  let message = input.split('').reverse().join('');
  return message;
  // YOUR CODE GOES ABOVE HERE //
}



// the Long way ~~

function reverseThatAgain(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;

}

// the Long way ~~








// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}