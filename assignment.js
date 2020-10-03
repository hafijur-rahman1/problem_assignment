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
console.log("Your need", myNeed, "Cubic Feet wood");

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
    

