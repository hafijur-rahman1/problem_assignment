function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var newFeet = feetToMile(1);
console.log("Your answer is =", newFeet);

// Cubic Feet calculator

 function woodCalculator (chair, table, bed){
     var total = chair*1 + table*3 + bed*5;
     return total;
 }
 
var myNeed = woodCalculator(1, 1, 2);
console.log("You need", myNeed, "Cubic Feet wood");

//  brickCalculator
function brickCalculator(floor) {
    if(floor < 11){
        return 15000* floor;
    }
    else if(floor < 21){
        return 12000 * floor;
    }
    else{
        return 10000 * floor;
    }
}
var myBuilding = brickCalculator(34);
console.log("You need total", myBuilding, "bricks");


// function tinyFriend

var my_arry = ["hero", "musana", "sallu", "elaina","pi"];

function tinyFriend(arry) {
	return arry.reduce(function(prevWord,currWord) {
		if (currWord.length < prevWord.length) {
			return currWord;
		}
		else 
			return prevWord;
	})
}
var newName = tinyFriend(my_arry);
console.log(newName);




// **********************************
var friendName = ["php","css","JavaScript","jQuery","C#"];

var tinyName = [];
for (var i = 0; i < friendName.length; i++)
{
tinyName.push(friendName[i].length);
// Creating a new array with string length of each element of a given array
}

var x = tinyName.indexOf(Math.max(...tinyName));
/*
Math.max(...strLength) - finds max number in new array which presents the longest string
in the given array.
x = strLength.indexOf(...) finds the position of the longest string...
*/

console.log(tinyName[x]); // Gets string with x position of given array
// console output: JavaScript