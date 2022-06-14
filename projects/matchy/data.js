/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {


}

animal.species = 'gorilla';

animal['name'] = 'leeroy';

animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'AHHHAHHHH';

noises.push('roof roof');

noises.splice(noises.length, 0, 'boom');

noises.unshift('bang bang');


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;

noises.push('boom boom');
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);

let duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh'],
}
animals.push(duck);

let mickeyMouse = {
  species: 'mouskaman',
  name: 'mickey',
  noises: ['random singing', 'hot dog !', 'meeska , mooska'],
}

animals.push(mickeyMouse);

let george = {
  species: 'monkey',
  name: 'Curious george',
  noises: ['ooahha', 'roar', 'ouu mad monkey'],
}

animals.push(george);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// i chose a array for my data structure...i like using them
// if you know , you know..
george['friends'] = ['the yellow hat guy'];

function getRandom(){
  // function that takes an array and return a random index value from the array..
  for (let i = 0; i < animals.length; i++) {
    return Math.random(animals[i]);
  }
};

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports.animal = animal || null;
  module.exports.noises = noises || null;
  module.exports.animals = animals || null;
  module.exports.friends = friends || null;
  module.exports.getRandom = getRandom || null;
}