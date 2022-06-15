/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, nameOfUser) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == nameOfUser) {
            return arr[i];
        }
    }
    return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, userName, replacement) {
    // get all values from array, check if the the arr has the userName,if so...
    // reassign that item to the replacement
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == userName) {
            arr[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr, user) {
    // reassign that item to the replacement
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === user) {
            arr[i] = {};
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(array, object) {
     var matchExists = false;
    for (var i = 0; i < array.length; i++) {
        if (object.name === array[i].name) {
            matchExists = true;
        }
    }
    if (matchExists === false && object.name.length > 0 && object.species.length > 0) {
        array.push(object);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
