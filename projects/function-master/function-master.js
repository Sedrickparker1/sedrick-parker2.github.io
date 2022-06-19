//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var output = [];
    for (let key in object) {
        output.push(object[key])
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // should take an objects keys and return them together with a space...
    let output = [];
    for (var key in object) {
        output.push(key);
    }
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let output = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            output.push(object[key])
        }
    }
    return output.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (typeof collection === 'object' && !Array.isArray(collection) && collection != null && collection instanceof Date === false) {
        return 'object';
    } else {
        return 'array';
    }
}




//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    if (object.name) {
        var nameToDo = object.name.split('');
        //    split method to make it a array
        var cap = nameToDo[0].toUpperCase();
        //    now we can acces the first letter and concat with no problem..
        return "Welcome " + cap + object.name.slice(1) + "!";
        //    now return the message..
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(obj) {
    if (obj.name && obj.species) {
        let n = obj.name.split('');
        let fullName = n[0].toUpperCase() + obj.name.slice(1);
        //      the name of the animal
        let s = obj.species.split('');
        let type = s[0].toUpperCase() + obj.species.slice(1);
        //       the species of the animal made caps too
        return fullName + ' is a ' + type;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(obj) {
    if (obj.hasOwnProperty('noises') && obj.noises.length > 0) {
        return obj.noises.join(' ');
    }
    //   checks if it has a noise property and does it have values inside of it 
    if (!obj.hasOwnProperty('noises') || obj.noises.length === 0) {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string ,word) {
    return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, obj) {
    if (!obj.hasOwnProperty('friends')) {
        return false;
    }
    if (obj.friends.length > 0) {
        let allFriends = obj.friends.join(' ');
        return allFriends.includes(name);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, arr) {
    var output = [];
    for (var key in arr){
        // for in loops for mee
      if(!arr[key].friends.includes(name) && arr[key].name !== name ){
        // if the friends array doesent include the name and make sure i dont return the name
         output.push(arr[key].name)
        //  push the data in the ouput
      }
    }
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(obj, key, value) {
    if (obj.key) {
        key = value
        return obj
    } else {
        obj[key] = value;
        return obj;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(obj, array) {
    for(var i = 0 ; i < array.length; i ++){
        for(var key in obj){
          if(array[i] === key){
            delete key;
            delete obj[key];
          }
        }
      }
      return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}