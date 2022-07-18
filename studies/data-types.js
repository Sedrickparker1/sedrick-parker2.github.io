/*

JavaScript Data Types

  
There are eight basic data types in JavaScript. 

EX: They are:

String -	represents textual data	'hello',   

EX: "hello world!" etc
/////////////////////////
Number	- an integer or a floating-point number	 

EX: 3, 3.234, 3e-2 etc.
/////////////////////////
BigInt  - an integer with arbitrary precision	

EX: 900719925124740999n , 1n etc.

/////////////////////////
Boolean	- Any of two values: true or false	 

EX: (1 > 3) => false;
let canVote = true;

/////////////////////////
undefined - a data type whose variable is not initialized	

EX: let a;

/////////////////////////
null- denotes a null value	 


EX: let a = null;

/////////////////////////
Symbol - data type whose instances are unique and immutable  

EX:let value = Symbol('hello');

//////////////////////////////////////
Object	- key-value pairs of collection of data	..

Ex:  const car = {type:"Fiat", model:"500", color:"white"};

//////////////////////////////
Array - an array is an ordered list of values. 
Each value is called an element specified by an index.

EX: 
const cars = ["Saab", "Volvo", "BMW"];
///////////////////////////////////

Infinity :

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
Negative Infinity


*/


