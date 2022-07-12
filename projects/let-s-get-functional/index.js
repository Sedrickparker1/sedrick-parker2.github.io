// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sedrick-parker2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
    // use _.filter method to return a new array of only male customers
    return _.filter(array, function (customer) {
        return customer.gender === 'male';
    }).length;
};
var femaleCount = function (arr) {
    let ladyCount = 0;
    let checker = arr.reduce(function (count, currentVal) {
        //      return count[currentVal] === 'female'? ladyCount++ : ladyCount
        if (currentVal.gender === 'female') {
            ladyCount++
        }
    }, 0);
    return ladyCount;
};

var oldestCustomer = function (arr) {
    let oldest = 0;
    let name = '';
    // start with new oldest variable 
    //  - **Objective**: Find the oldest customer's name
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > oldest) {
            oldest = arr[i].age;
            name = arr[i].name;
        }
    }
    //     have all values so, how could i get the age values ?
    // use a method to get the highest age, then check to see whos age matches the number
    //   this is going to be the oldest users age now we need to check who
    return name;
    //  - **Output**: `String`
}

var youngestCustomer = function (arr) {
    let output = [];
    //  - **Objective**: Find the oldest customer's name
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i].age)
        // ### 4: `youngestCustomer`
        //  - **Objective**: Find the youngest customer's name
        //  - **Input**: `Array`
        //  - **Output**: `String`
        //  - **Constraints**:
    }
    let youngster = Math.min(...output);
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].age === youngster) {
            //       so if users age is the youngest return the name
            return arr[j].name;
        }
    }
};
var averageBalance = function(array){
  let moneys = [];
  for(i = 0; i < array.length; i ++){
    moneys.push(Number(array[i].balance.replace(/[^0-9\.-]+/g,"")))
  }
  return moneys.reduce((count, currVal)=>{
    return count += currVal  / array.length;
  }, 0);
};

var firstLetterCount = function (array, letter) {
    //  - **Objective**: Find how many friends of a given customer have names that start with a given letter
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.charAt(0) === letter.toUpperCase()) {
            // if the first name letter is equal to letter 
            // add 1 to the count variable
            // return the count variable
            count += 1
        };

    }
    return count;
};

var friendFirstLetterCount = function (array, customer, letter) {
    let friendNames = [];

    let result = 0;
    // we are returning this variable

    //  - **Objective**: Find how many friends of a given customer have names that           start with a given letter
    // we need to get the values before anything..

    for (let i = 0; i < array.length; i++) {
        // if customer name is true continue the function , else stop
        if (customer === array[i].name) {
            // getting the friends stored in a friendnames array..
            friendNames.push(array[i].friends);
        }
    } // for loop end||||||||||

    // loop thru the names array to get the names of the friends to test the letter on
    for (let n = 0; n < friendNames.length; n++) {
        // this is a 2d array..
        for (let m = 0; m < friendNames[n].length; m++) {
            // now we can acces the names inside of the friend...

            if (friendNames[n][m].name[0].toUpperCase() === letter.toUpperCase()) {
         // if friends names first letter is equal to the letter
                result += 1;
               
            }
        }
    }
    return result;
    //  - **Output**: `Number`
};

var friendsCount = function(array, user){
    let output = [] ;
    for (let i = 0; i < array.length ; i++) {
      // loop thru the array
     let friendsList = array[i].friends;
      for (let s = 0; s < friendsList.length ; s++){
        // loop thru the friends key array
        if (friendsList[s].name === user){
          // pushing names that have user as friends
           output.push(array[i].name)
        }
      }
    }
   return output;
};

var topThreeTags = function (array, tags=[]) {
    let allTags = [];
  
    let obj = {};
    
    for (i = 0; i < array.length; i ++){
      allTags.push(...array[i].tags);
    }
  
    for (i = 0; i < allTags.length; i ++){
      if (obj[allTags[i]]){
        obj[allTags[i]] ++
      }else{
        obj[allTags[i]] = 1;
      }
    }
    
    
    let checker =  Object.entries(obj).sort((a, b) =>{
      
      return b[1] - a[1];
    })
    tags = [checker[0][0], checker[1][0], checker[2][0]];
    return tags
} ;

var genderCount = function(array){
 let genderObj = array.reduce(function(obj, person){
  if (person.gender === 'male'){
    obj.male += 1;
  }
  else if(person.gender === 'female'){
    obj.female += 1;
  }
   else{
     obj.nonbinary += 1;
   }
  
   // check if the genders match the keys, for loop maybe 
return obj;
  
 },{male:0, female:0,nonbinary:0});

  return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
