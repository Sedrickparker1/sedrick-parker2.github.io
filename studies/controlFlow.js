/*

 Definition: 
 
 The control flow is the order in which the computer executes statements in a script.
  Code is run in order from the first line in the file to the last line,
  unless the computer runs across the (extremely frequent) structures that change the control flow, 
  such as conditionals and loops.

 CODE EXAMPLE:

 If condition evaluates to true, statement_1 is executed. 
 Otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.
You can also compound the statements using else if to have multiple conditions tested in sequence.

 if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) { //  flow will be determined by the input ofcourse..
  statement_n;
} else {
  statement_last;
}

 Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.
A set of statements is in turn generally structured as a block, which in addition to grouping, also defines a lexical scope.
Interrupts and signals are low-level mechanisms that can alter the flow of control in a way similar to a subroutine, but usually occur as a response to some external stimulus or event (that can occur asynchronously), rather than execution of an in-line control flow statement.
At the level of machine language or assembly language, control flow instructions usually work by altering the program counter. For some central processing units (CPUs), the only control flow instructions available are conditional or unconditional branch instructions, also termed jumps.
\\\



SWITCH STATEMENT :
The switch statement is used to perform different actions based on different conditions.
You can use the switch statement to select one of many code blocks to be executed.

Code Ex:

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

switch (new Date().getDay()// will  get current date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

breif description - 

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

*/