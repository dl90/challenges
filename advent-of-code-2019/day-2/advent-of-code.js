/**
 * @author Don (dl90)
 * @date December 17, 2019
 * @version day-2
*/

const fs = require("fs");
const inputPath = __dirname + "/input.txt";

const input = fs.readFileSync(inputPath, "utf-8");
const inputArr = input.split(",");

console.log(grabber(inputArr));

/*
Before running the program,
replace position 1 with the value 12
replace position 2 with the value 2
What value is left at position 0 after the program halts?
*/
function grabber(arr) {
  let intArr = [];
  arr[1] = 12;
  arr[2] = 2;

  for (ele of arr) {
    intArr.push(parseInt(ele, 10));
  }

  let state = true;
  while (state) {
    for (let i = 0; i < intArr.length; i += 4) {
      switch (intArr[i]) {
        case 1:
          intArr = add(intArr, i);
          break;
        case 2:
          intArr = multiply(intArr, i);
          break;
        case 99:
          state = false;
          break;
      }
    }
  }
  return intArr[0];
}

/*
Opcode 1 adds together numbers read from two positions and stores the result in a third position.
The three integers immediately after the opcode tell you these three positions
  - the first two indicate the positions from which you should read the input values
  - the third indicates the position at which the output should be stored.

For example,
  1,10,20,30,
  read the values at positions 10 and 20
  add those values
  and then overwrite the value at position 30 with their sum.
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
  const value1Index = arr[index + 1];
  const value2Index = arr[index + 2];
  const resultIndex = arr[index + 3];
  arr[resultIndex] = arr[value1Index] * arr[value2Index];
  return array;
}


/*
Part B

Determine what pair of inputs produces the output 19690720.

Find the value of:
  arr[1] (noun)
  arr[2] (verb)
    so that arr[0] = 19690720.

range for noun and verb is 0 to 99 inclusive.
need to reset array each time
*/
partB(inputArr);

function partB(arrB) {
  const result = [];

  function makeOriginalArr() {
    const originalArr = [];
    for (ele of arrB) {
      originalArr.push(parseInt(ele, 10));
    }
    return originalArr;
  }

  let calcArr = []
  calcArr = makeOriginalArr();

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      calcArr[1] = noun;
      calcArr[2] = verb;

      let state = true;
      while (state) {
        for (let i = 0; i < calcArr.length; i += 4) {
          switch (calcArr[i]) {
            case 1:
              calcArr = add(calcArr, i);
              break;
            case 2:
              calcArr = multiply(calcArr, i);
              break;
            case 99:
              state = false;
              break;
          }
        }

        //i dont know but it worked
        result.push(calcArr[0]);
        result.push(noun);
        result.push(verb);
        //this is key
        calcArr = makeOriginalArr();
      }

    }

  }
  console.log(result.includes(19690720));
  console.log(result.indexOf(19690720));
  console.log(result[result.indexOf(19690720)]);
  console.log(result[result.indexOf(19690720) + 1]);
  console.log(result[result.indexOf(19690720) + 2]);
  console.log(result[result.indexOf(19690720) + 3]);

  //What is 100 * noun + verb? (For example, if noun=12 and verb=2, the answer would be 1202.)
  console.log(100 * result[result.indexOf(19690720) + 1] + result[result.indexOf(19690720) + 2]);
}