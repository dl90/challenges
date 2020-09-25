/**
 * @author Don (dl90)
 * @date December 17, 2019
 * @version day-1
*/

const fs = require("fs");
const inputPath = __dirname + "/input.txt";

const input = fs.readFileSync(inputPath, "utf-8");
const arr = input.split("\n");

const resultArr = (loop(arr));
console.log(sum(resultArr));

const totalFUEL = totalFuelIncludingFuel(resultArr);
console.log(sum(totalFUEL));


function totalFuelIncludingFuel(fuelArr) {
  const totalFuelArr = [];

  for (ele of fuelArr) {
    totalFuelArr.push(ele);
    let x = ele;

    while (x > 6) {
      x = formula(x);
      totalFuelArr.push(x);
    }
  }
  console.log(totalFuelArr)
  return totalFuelArr
}

/**
 * Loops through each element in array and sends it to formula function
 * @param {Array} arr Array of fuel
 * @returns Array of recalculated fuel
 */
function loop(arr) {
  const returnArr = []
  arr.forEach(element => {
    returnArr.push(formula(element));
  });
  return returnArr;
}

// formula = (mass/3)roudDown - 2
function formula(num) {
  let inputVar = parseInt(num);

  const output = Math.floor(inputVar / 3) - 2;
  return output
}


/**
 * Sums all numbers in the array
 * @param {Array} arr Array of numbers
 * @returns the sum value
 */
function sum(arr) {
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
  }, 0)
  return sum;
}