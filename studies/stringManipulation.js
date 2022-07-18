// String
// The String object is used to represent and manipulate a sequence of characters.

// Description
// Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators,
//  checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.

// Comparing strings

// let a = 'a'
// let b = 'b'
// if (a < b) { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b) {
//   console.log(a + ' is greater than ' + b)
// } else {
//   console.log(a + ' and ' + b + ' are equal.')
// }

// yes you can compare strings because they are actually numbered .


// String primitives and String objects also give different results when using eval(). Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object. For example:

// let s1 = '2 + 2'              // creates a string primitive
// let s2 = new String('2 + 2')  // creates a String object
// console.log(eval(s1))         // returns the number 4
// console.log(eval(s2))         // returns the string "2 + 2"

// concat() – Combines the text of two or more strings and returns a new string.

/*CODE EXAMPLE: 
    let firstName = 'sed';
    let lastName = 'parker';

    console.log(firstName.concat(' ' + lastName)) => sed parker
*/
// indexOf() – Returns the starting index of a substring within another string. ...

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

/*CODE EXAMPLE:
const students = ['cam', 'teems', 'chris']
console.log(students.indexOf(chris)) => 2
*/


// charAt() – Returns the character at the specified location.

// let nickName = 'seddydoowop';

// let getFirstLetter = nickName.chaAt(0)

// console.log(getFirstLetter) => 's';