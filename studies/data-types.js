/*

JavaScript Data Types

  
There are eight basic data types in JavaScript. 

EX: They are:

STRING -	represents textual data	'hello',   

EX: "hello world!" etc
/////////////////////////
NUMBER	- an integer or a floating-point number	 

EX: 3, 3.234, 3e-2 etc.
/////////////////////////
BigInt  - an integer with arbitrary precision	

EX: 900719925124740999n , 1n etc.

/////////////////////////
BOOLEAN	- Any of two values: true or false	 

EX: (1 > 3) => false;
let canVote = true;

/////////////////////////
UNDEFINED - a data type whose variable is not initialized	

EX: let a;

/////////////////////////
NULL - denotes a null value	 


EX: let a = null;

/////////////////////////
SYMBOL - data type whose instances are unique and immutable  

EX:let value = Symbol('hello');

//////////////////////////////////////
OBJECT	- key-value pairs of collection of data	..complex data type so can be reassigned..


Ex:  const car = {type:"Fiat", model:"500", color:"white"};

//////////////////////////////
ARRAY - an array is an ordered list of values. also a complex data type.
Each value is called an element specified by an index.

EX: 
const cars = ["Saab", "Volvo", "BMW"];
///////////////////////////////////

INFINITY :

The global property Infinity is a numeric value representing infinity.

not writable, not enumerable, or configureable

Code Ex: 

const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

// console.log(Infinity          ); /* Infinity */
// console.log(Infinity + 1      ); /* Infinity */
// console.log(Math.pow(10, 1000)); /* Infinity */
// console.log(Math.log(0)       ); /* -Infinity */
// console.log(1 / Infinity      ); /* 0 */
// console.log(1 / 0             ); /* Infinity */
/*
NEGATIVE INFINITY : The negative infinity in JavaScript is a constant value which is used to represent a value which is the lowest available. 
This means that no other number is lesser than this value.
 It can be generated using a self-made function or by an arithmetic operation.


 Code Ex:

 function checkNegativeInfinity(x) {
        if (x === Number.NEGATIVE_INFINITY) {
            return 'Number is -Infinity';
        } else {
            return 'Number is not -Infinity';
        }
    }
console.log(checkNegativeInfinity(2)) => Number is not -Infinity; 
*/


