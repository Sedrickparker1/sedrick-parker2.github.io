// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
return string.length;
    // YOUR CODE ABOVE HERE //
}
let length = string => string.length;
// a little refractor...

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}
let lowerYourTone = string => string.toLowerCase();

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 * reggex
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

    // YOUR CODE BELOW HERE //
    let toDashCase = string => string.replaceAll(' ', '-').toLowerCase();

    // a little smaller than before..
    // YOUR CODE ABOVE HERE //

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let valid = true;
//   validator.
    for (var i = 0; i < string.length-1; i++){
    let first = string[0];
//   if first is equal to char return true false otherwise..case insens.!..
    if(first == char.toLowerCase() || first == char.toUpperCase()){
      return valid;
    }
      return !valid;
  }
}

function beginsWith2(string, char) {
    // YOUR CODE BELOW HERE //
    let valid = true;
//   validator.
    for (var i = 0; i < string.length-1; i++){
    var first = string[0];
//   if first is equal to char return true false otherwise..case insens.!..
     let tester = first == char.toLowerCase() || first == char.toUpperCase() ? valid : !valid;
      return tester;
    //   a little simpler..:)
  }
}




/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

 function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
  for(let i = string.length-1; i >= 0 ; i++){
    let lastLetter =  string[i];
    if(lastLetter == char.toLowerCase() || lastLetter == char.toUpperCase()){
      return true;
    }
  }
    // YOUR CODE ABOVE HERE //
    // 
  return false;
}


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne.concat(stringTwo);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

 function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
let winner ;
// we have to have a winner of course...
const firstNum = stringOne.length;
// this is what we need , now we have the length values;
const secondNum = stringTwo.length;
// Now all we need is to compare
if (firstNum > secondNum){
  winner = stringOne;
}
  winner = stringTwo;
    return winner;
 }  
   

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
