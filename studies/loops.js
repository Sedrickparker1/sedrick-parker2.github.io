/**LOOPs : loops are built in features that allow us to excecute a block 
 * of code as many times as needed
 * 
 * 1 For loops
 * 
 * .effective at looping over arrays
 * 
 * .can be used to get values backwards as well as forward

    for(start; stop; update){//}

    start: defines a counting variable.

    stop: defines a condition that when false will exit the loop.

    update: defines how to increment a counting variable.
 * 
 *  Code Example: 
 *  get values out of the array ..
 * 
 * let names = ['sed', 'gigi', 'micheal', 'carleone'];
 * 
 * for(let i = 0; i < names.lenth; i ++){
 *  console.log(names[i]); =>
 *  will log every element in the array starting from the 0 idex.
 * 'sed', 'gigi', 'micheal'....
 * }
 * 
 * for(let i = names.length -1 ; i >= 0; i --){
 *  console.log(names[i]); =>
 *  logs every element but this time it will be backwards
 * 'carleone ' , 'micheal', 'gigi'...
 * }
 * 
//  * ////////////////////////////////////////////////////
 * 

 * 
 * 2 For - in - loops
 * 
 * .for in loops are designed to iterate over objects
 * 
 * .can only be accessed usign ARRAY syntax ,
 *  dont be a ass and 
 *  use dot notation, it will not work :|
 * 
 *  uses key to get values from the object
 *  
 * EXAMPLE 
 * 
 * for (let key in obj){console.log(obj[key])}
 * 
 * ///////////////////////////////////////////////////////
 * 
 * 
 * 
 * 
 * 
 * The WHILE LOOPS 'a oldie but a goodie'
 * 
 * .a while loop is a statement that will perform an action as long as the 
 * condition inside the WHILE(){} equates to true
 * 
 * let num = 16
 * 
 * EXAMPLE : while (num < 21){
 *  return num;
 *  num++;   //// will continue  until 16 becomes 21 :)
 * }
 * 
 * 
 * .must have a break out , some ending point otherwise you will create
 *  a infinite loop
 * 
 * EXAMPLE : while(num > 15){return num; num++} ///////  infinite loop  :|
 * 
 * 
 * 
 * 
 * 
 */