// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
  return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value) {
  if (typeof value === 'string' || value instanceof String) {
    return 'string';
  }
  if (typeof value === 'object' && Array.isArray(value) && value instanceof Array) {
    return 'array';
  }
  if (typeof value === 'object' && value instanceof Object && value !== null && isNaN(value)) {
    return 'object';
  }
  if (typeof value === 'number' && value !== null) {
    return 'number';
  }
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (typeof value === 'boolean') {
    return 'boolean';
  }
  if (value === null) {
    return 'null';
  }
  if (value instanceof Function) {
    return 'function';
  }
  if (value instanceof Date) {
    return 'date';
  }
}



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"

*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (arr, num) {
  let newArr = [];
  //   our output;
  if (!Array.isArray(arr)) {
    return newArr;
  }
  if (isNaN(num) || num === 1) {
    return arr[0];
  } else if (num < 0 && num < arr.length) {
    return newArr;
  } else if (num > arr.length) {
    return arr
  }
  else if (num > 0) {
    arr.pop(num);
    return arr
  }
  else if (num > 0 && num > arr.length) {
    return arr;
  }
}


_.last = function (arr, num) {
  let newArr = [];
  //   our output;
  if (!Array.isArray(arr)) {
    return newArr;
  }
  if (isNaN(num) || num === 1) {
    return arr[arr.length - 1];
  }
  else if (num > 0 && num < arr.length) {
    arr.reverse();
    arr.pop(arr[num]);
    arr.reverse();
    return arr
  }
  else if (num > arr.length) {
    return arr
  }
  else if (num < 0) {
    return newArr;
  }
}


_.indexOf = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return -1;
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.contains = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.each = function (collec, func) {
  if (Array.isArray(collec)) {
    //     if collection is a array loop thru and call function on i, i, collec
    for (let i = 0; i < collec.length; i++) {
      func(collec[i], i, collec)
    }
  }
  else {
    for (let key in collec) {
      func(collec[key], key, collec);
    }
  }
}




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.unique = function (arr) { return [...new Set(arr)]; }
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.filter = function (arr, func) {
  var fixedArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        fixedArr.push(arr[i]);
      }
    }
  }
  return fixedArr;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) {
  let output = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i], i, array) === false) {
      output.push(array[i]);
    }
  }
  return output;
}

_.partition = function (arr, func) {
  return [_.filter(arr, func), _.reject(arr, func)];
}

/** _.partition
* Arguments:
// *   1) An array
// *   2) A function
// * Objectives:
// *   1) Call <function> for each element in <array> passing it the arguments:
// *       element, key, <array>
// *   2) Return an array that is made up of 2 sub arrays:
// *       0) An array that contains all the values for which <function> returned something truthy
// *       1) An array that contains all the values for which <function> returned something falsy
// * Edge Cases:
// *   1) This is going to return an array of arrays.
* Examples:
// *   _.partition([1,2,3,4,5], function(element,index,arr){
// *     return element % 2 === 0;
// *   }); -> [[2,4],[1,3,5]]
// }
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function (collec, func) {
  let output = [];

  for (var i = 0; i < collec.length; i++) {
    if (Array.isArray(collec)) {
      output.push(func(collec[i], i, collec));
    }
  }
  if (!Array.isArray(collec)) {
    for (let key in collec) {
      output.push(func(collec[key], key, collec))
    }
  }
  return output;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (arr, prop) {
  return _.map(arr, function (i, index, arr) {
    // maps thru the arr , then return
    return arr[index][prop];
  })
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/



_.every = function (collec, func) {
  let falseCount = 0;
  if (func === undefined) {
    //     checking if the func is undefined
    if (Array.isArray(collec)) {
      for (let i = 0; i < collec.length; i++) {
        if (collec[i] === false) {
          falseCount++;
        }
      }
    }
  } else {
    if (Array.isArray(collec)) {
      for (let i = 0; i < collec.length; i++) {
        if (func(collec[i], i, collec) === !true) {
          falseCount++;
        }
      }
    }
  }
  return falseCount === 0;
}


_.some = function (coll, func) {
  let someSome = 0;
  // this is the variable that we will be using to determine if the func returns true
  if (func === undefined) {
    // check if func is undefined and then check if the collec is an array , if true loop and call func on current element, current value, and the entirre array or obj
    if (Array.isArray(coll)) {
      for (let i = 0; i < coll.length; i++) {
        // looping over every elemet and get values
        if (coll[i] === true) {
          someSome++;
          // if a value is true, it will be saved in the somesome var,,
        }
      }
    }

  } else {
    if (Array.isArray(coll)) {
      // still have to check if it is an array
      //   *   1) Call <function> for every element of <collection> with the params
      // *  if <collection> is an array:
      // *  current element, it's index, <collection>
      for (let j = 0; j < coll.length; j++) {
        // current element , index , array
        if (func(coll[j], j, coll) === true) {
          someSome++;
          // if something is true we will know
        }
      }
    }
    if (!Array.isArray(coll)) {
      // if this results to false we are going to 
      // for in loop and call func on 
      //      if <collection> is an object:
      // *        current value, current key, <collection>
      for (let key in coll) {
        if (func(coll[key], key, coll) === true) {
          someSome++;
        }
      }
    }
    // now all we 
  }
  return someSome > 0;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.reduce = function (arr, func, seed) {
  var output;
  if (seed === undefined) {
    output = arr[0];
    for (var i = 1; i < arr.length; i++) {
      output = func(output, arr[i], i, arr);
    }
  }
  else {
    output = seed;
    for (var i = 0; i < arr.length; i++) {
      output = func(output, arr[i], i, arr)
    }
  }
  return output;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.extend = function (obj, ...props) {
  // map through to get all values fro ...props arg
  props.map((prop) => {
    Object.assign(obj, prop);
  });
  // assign those objects to the first arg and then return the first arg
  return obj;
}
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports = _;
}
