/**
 * @author Don (dl90)
 * @date December 25, 2019
 * @version day-5
*/

const fs = require("fs");

const inputPath = __dirname + "/input.txt";
const input = fs.readFileSync(inputPath, "utf-8");
const inputArr = input.split(",");

/*
Opcode 1 adds together numbers read from two positions and stores the result in a third position.
The three integers immediately after the opcode tell you these three positions
  - the first two indicate the positions from which you should read the input values
  - the third indicates the position at which the output should be stored.
*/
function add(arr, index) {
  const array = arr;
  const value1Index = arr[index + 1];
  const value2Index = arr[index + 2];
  const resultIndex = arr[index + 3];
  arr[resultIndex] = arr[value1Index] + arr[value2Index];
  return array;
}

/*
Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them.
Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.
*/
function multiply(arr, index) {
  const array = arr;
  const multiplicand = array[index + 1];
  const multiplier = array[index + 2];
  const position = array[index + 3];
  array[position] = array[multiplicand] * array[multiplier];
  return array;
}

/*
Opcode 3 takes a single integer as input and saves it to the position given by its only parameter.
For example: the instruction 3,50 would take an input value and store it at address 50.
*/
function save(arr, index, input) {
  const array = arr;
  const position = array[index + 1];
  array[position] = parseInt(input);
  return array;
}

/*
Opcode 4 outputs the value of its only parameter.
For example, the instruction 4,50 would output the value at address 50.
*/
function output(arr, index) {
  const array = arr;
  const position = array[index + 1];
  return array[position];
}

/*
Parameter mode.

mode 0 = position mode, parameter interpreted as position     (param 50 => value at address 50 in memory)
mode 1 = intermediate mode, parameter interperted as value    (param 50 => value of 50)

opcode is the right most 2 digits ie 10145 => opcode = 45
parameter modes are single digits, one per parameter, from right to left of opcode.

1002,4,3,4: => opcode 02
paramater modes are: 0 for hundreds, 1 for thousands, 0 for ten-thousand
*/
function paramMode(arg) {
  const instructionStr = arg[0];
  const paramObj = {};

  let instructionStrLength = instructionStr.length;
  let opcode = parseInt(instructionStr.slice(instructionStrLength - 2, instructionStrLength));
  let index, param1, param2, param3 = 0;

  if (instructionStrLength >= 3) {
    param1 = instructionStr.slice(instructionStrLength - 3, instructionStrLength - 2);
    paramObj["param_1"] = parseInt(param1);
  } else {
    paramObj["param_1"] = param1;
  }

  if (instructionStrLength >= 4) {
    param2 = instructionStr.slice(instructionStrLength - 4, instructionStrLength - 3);
    paramObj["param_2"] = parseInt(param2);
  } else {
    paramObj["param_2"] = param2;
  }

  if (instructionStrLength >= 5) {
    param3 = instructionStr.slice(instructionStrLength - 5, instructionStrLength - 4);
    paramObj["param_3"] = parseInt(param3);
  } else {
    paramObj["param_3"] = param3;
  }

  // index used to increment loop
  opcode >= 2 ? index = 4 : index = 2;

  paramObj["opcode"] = opcode;
  paramObj["index"] = index;

  return paramObj;
}

main(inputArr)
function main(input) {

  let paramObj = paramMode(input);
  let index = paramObj.index;
  let state = true;

  console.log(input);
  console.log(paramObj);

  // while(state) {


  //   for(let i = 0; i < input.length; i += index) {
  //     switch(intArr[i]) {
  //       case 1:
  //         intArr = add(intArr, i);
  //         break;
  //       case 2:
  //         intArr = multiply(intArr, i);
  //         break;
  //       case 99:
  //         state = false;
  //         break;
  //     }
  //   }
  // }
}
