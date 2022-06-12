// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */


function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value){
    // YOUR CODE BELOW HERE //
    return typeof value  === 'object' && value instanceof Object && value !== null && isNaN(value);
    // if the value type equals object and it is not and array and  dosent equal null.....
   // YOUR CODE ABOVE HERE //
   
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(val) {
    // YOUR CODE BELOW HERE //
    return val instanceof Array || val instanceof Object && isNaN(val) && val !== null;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'string' || value instanceof String){
        return 'string';
    }
    if(typeof value === 'object' && Array.isArray(value) && value instanceof Array){
      return 'array';
    }
    if(typeof value  === 'object' && value instanceof Object && value !== null && isNaN(value)){
      return 'object';
    }
    if(typeof value === 'number' && value !== null){
      return 'number';
    }
    if(typeof value === 'undefined' && !isNaN(value)){
      return 'undefined';
    }
    if(typeof value === 'boolean'){
      return 'boolean';
    }
    if(value === null){
      return 'null';
    }
    if(value instanceof Function){
      return 'function';
    }
    if(value instanceof Date){
       return 'date';
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
