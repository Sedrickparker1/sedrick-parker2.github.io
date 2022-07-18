 /**OPERATORS..: operators are symbols that perfrom specific
* task in your javascript code.
* 
* = : the assignment operator EXAMPLE: let variable = 'yeahyeshyes'
* 
* MORE Cool math operators
 +=	    x += y	 x = x + y
 -=	    x -= y	 x = x - y
 *=	    x *= y	 x = x * y
 /= 	x /= y	 x = x / y
 %= 	x %= y	 x = x % y
**=     x **= y	 x = x ** y
* 
* String Operators
* 
* +  = The plus sign is also used to concat strings together into one string.
*   EXAMPLE: 'sed' + 'rick'   = 'sedrick'
* 
* Compare Opertors
* Comparison operators are used in logical statements to determine equality or difference between variables or values.
*   
*   ==	equal to
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type
    >	greater than
    <	less than
    >=	greater than or equal to
    <=	less than or equal to
    ?	ternary operator
    * 


    Logical Operators: Logical operators perform logical operations: AND, OR and NOT.

        &&	- Logical AND: true if both the operands/boolean values are true, else evaluates to false
            Code Ex:

            const a = true, b = false;
            const c = 4;
            console.log(a && a); => true
            console.log(a && b);  => false
            console.log((c > 2) && (c < 2)); => false

        ||	- Logical OR: true if either of the operands/boolean values is true . evaluates to false if both are false
            Code Ex:

            const a = true, b = false, c = 4;
            console.log(a || b); // true
            console.log(b || b); // false
            console.log((c>2) || (c<2)); // true

        !	- Logical NOT: true if the operand is false and vice-versa.
            Code Ex: 

            const a = true, b = false;
            console.log(!a); // false
            console.log(!b); // true

        typeOf Operator : You can use the typeof operator to find the data type of a JavaScript variable.
            Code Ex: 
            typeof "John"                 // Returns "string"
            typeof 3.14                   // Returns "number"
            typeof NaN                    // Returns "number"
            typeof false                  // Returns "boolean"
            typeof [1,2,3,4]              // Returns "object"
            typeof {name:'John', age:34}  // Returns "object"
            typeof new Date()             // Returns "object"
            typeof function () {}         // Returns "function"
            typeof myCar                  // Returns "undefined" *
            typeof null                   // Returns "object


        Unary operators : 

        Unary plus (+)	Tries to convert the operand into a number
        Code EX : return 1 + 2 => 3

        Unary negation (-)	Tries to convert the operand into a number and negates after
        Code Ex: return 2 - 10 => 8

        Increment (++)	Adds one to its operand
        Code Ex : let number = 12;
        number ++
        console.log(number) => 13
        

        Decrement (--)	Decrements by one from its operand
        Code Ex: let number = 12;
        number--
        console.log(number) => 11



        Ternary Operators :
         The conditional (ternary) operator is the only JavaScript operator that takes three operands:
          a condition followed by a question mark (?), 
          then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
           This operator is frequently used as an alternative to an if...else statement.


           Code EX: function isEven(number){
            return (numer % 2 == 0 ? true : false);
           }

           Logic => condition ? exprIfTrue : exprIfFalse

           The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:

                function example() {
                return condition1 ? value1
                        : condition2 ? value2
                        : condition3 ? value3
                        : value4;
                }

                // Equivalent to:

                function example() {
                if (condition1) { return value1; }
                else if (condition2) { return value2; }
                else if (condition3) { return value3; }
                else { return value4; }
                }

    * /*/

