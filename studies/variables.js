/**
 * VARIABLES: In JavaScript, a variable stores the data value that can be changed later on.
 *  VARIABLES must have a unique name as show below 
 * 
 * EXAMPLE var myName = 'sedrick';
 *         let value = 'value';
 *         const VALUE = VALUE;
 * 
 * var>>
 * .Before the advent of ES6, var declarations ruled.  
 * 
 * .var declarations are globally scoped or function/locally scoped.
 *    EXAMPLE:
 *   var greeter = "hey hi";
    
    Here, we can clearly see that greeter is a global scoped variable.. :-)

    function newFunction() {
        var hello = "hello";
    }
    the hello variable is a function scoped variable..
 * 
    can be delcared and reassigned..
    var myName = 'sedrick'
    var myName = 'leeroy'   ...>    This will get no error ...sickening

    .If hoisted will be undefined !

    .VAR can get very bad if you choose to associate multiple variables with the same names,
    this can generate alot of bugs in your code and make you CRY..    
    
    :\
    ////////////////////////////////////////

    
    LET :}

    .is more preffered for variable decleration :)

    .LET is block- scoped mostly , unless made global..

    .LET can be reassigned but only redeclared if they are in totaly different scopes  , otherwise
    it will be an error..
        EXAMPLE: 

        let myName = 'weddyman';
         myName = 'sed';

         CODE EXAMPLE :

         function watever(num){
         if (num % 2 === 0){
            let message = 'this is a even number

            console.log(message) 
            
            //message will only be defined in
            the code block !
          }

          return message // 'message will not be defined
         }

    .the LET keyword is not initialized.
     So if you try to use a let variable before declaration,
      you'll get a Reference Error.
 * 
///////////////////////////////////////////////
   


   const :|

    .Variables declared with the CONST maintain CONSTANT values

    EX: const IMNOTCHANGING = 'its really not changin';
 * 
    .cannot be redeclared or reassigned

    const hey = "say Hi";
    hey = "say Hello instead";// error: Assignment to constant variable. 

    .constant objects cannot be reassigned also..

    EXAMPLE const person = {name : 'sed, age: 145 , job: 'graveyard resident :)',}
    person = {
        no... this will not work..
    }

    CODE EXAMPLE : function iSEven(num){
         // same as let accept cant be reassigned

         if(num % 2 === 1){
            const message = 'this is a odd number'

            console.log(message)
         }
    }

    .but you could do this with CONST objects   EXAMPLE : person.nickName = 'leonidas';

    when hoisted CONST is not initalized , same as the LET variable....


 * 
 * 
 * 
 */


