/**
 * FUNCTIONS : 
 * 
 * 
 * 
 * .functions allow us to keep block of code and use that code to perfrom task 
 * 
 * 
 * . we can the use that code whenever want and how many times you want
 * 
 *  .can be thought of as logical data 
 * 
 * 
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
 * NAMED FUNCTIONS : all functions except anonymous functions..
 * 
 * .Are hoisted to the top of their scope
 * 
 * .Functions can be called before they are defined..
 * 
 * EXAMPLE : function sayYes('sayYes is the name of the function!!');
 * 
 * ////////////////////////////////////////////////////////////////////////////////////
 * 
 * 
 * 
 * ANONOYMOUS FUNCTIONS : 
 * 
    are functions that dont have names that are mostly written by being passed into other functions
 *  
    EXAMPLE : 

    function(){console.log('anonymous')} ||


    EXAMPLE : this is an example of a function being a first class Objects.

    function sayYesLoud(word, makeLoud){console.log(makeLoud(word))}

    .is very effective in providing flexability to your code
    ..
 * 
 * ///////////////////////////////////////////////////////////////////////////////////
 * 
 * 
 * FUNCTION EXPRESSiONS : when a anonymous function is assigned to a variable or constant .
 *  
 * .when using , you can only cal the function after its been assigned to a variable
 * 
 * 
 * .also an example of a function being a first class Object
 * 
 * EXAMPLE: let add = (a, b) => a + b;
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
 * 
 */