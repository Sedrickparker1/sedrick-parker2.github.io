/**
 * FUNCTIONS : 

   * .functions allow us to keep block of code and use that code to perfrom task 
   * . we can the use that code whenever want and how many times you want
   *  .can be thought of as logical data 
   * .the word to delcare a function is the syntax 
   * 'function'
 * 
 * EXAMPLE :=> function sayYes(){console.log('yes')}
 * 
 * .we list required inputs in our functions that are located in the parenthesis,  we call them parameters
 * 
 * EXAMPLE : => 
 * function sayYes(word){console.log(word)}
 * sayYes('yes);
 * 
 * .when designing functions make the parameters as clear as you possibly can !
 * 
 * ///////////////////////////////////////////////
 * ARGUMENTS : arguments are the values that are passed into the function whenever we execute the code
 * 
 * . think of arguments like passangers, 
 * 
 *  .the parameters are the car seats
 *                                              
 *                                                  EXAMPLE: function(argument1, argument2){}
 *  .to call any function , reference the function 
 *   then pass any arguments expected in data value.
 * 
 * ////////////////////////////////////////////////
 * 
 * 
 * ANONOYMOUS FUNCTIONS : 
 * 
    are functions that dont have names that are mostly written by being passed into other functions
 *  
    Code EX : 

    function(){console.log('anonymous')} ||

    EXAMPLE : this is an example of a function being a first class Objects.

    function sayYesLoud(word, makeLoud){console.log(makeLoud(word))}

    .is very effective in providing flexability to your code
    ..
 * 
 * ///////////////////////////////////////////////////////////////////////////////////
 * 
 * 
 * Function EXPRESSiONS : when a anonymous function is assigned to a variable or constant .
 *  
   The function keyword can be used to define a function inside an expression.
   You can also define functions using the Function constructor and a function declaration.
 *
 * let add = function(num1, num2){
 *    return num1 + num2
 * }
 * 
 * console.log(add(12, 1)) => 13
 * ///////////////////////////////////
 * 
 * Function Decleration : 
 * 
 * The function declaration 
 * (function statement) defines a function with the specified parameters.
 * 
 * Code Ex:
 * 
 * function add (num1, num2){
 *    return num1 + num2
 * }
 * console.g(add(12, 3)) => 15
 * 
 * 
 * ////////////////////
 * 
 * 
 * Function Call :
 * 
   A function call is an expression containing the function name followed by the function call operator,
   () . If the function has been defined to receive parameters, 
   the values that are to be sent into the function are listed inside the parentheses of the function call operator.
 * Code Ex :

   let result = add(1, 3);

   console.log(result) => 
   will return the result from the function call

 * /////////////////////////////

   
 * Named Functions: 
 * 
 *    In JavaScript,
 *  named functions are simply a way of referring to a function that employs the function keyword followed by a name that can be used as a callback to that function.
 *  Normal functions with a name or identifier are known as named functions
 * 
 * Code EX:
 * 
 * function doSomething(item){
 * return item
 * }
 * this is a named funcion because it has a keyWord that can be used in a callBac;
 * 
 * 

 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */