/**
 * @author Don (dl90)
 * @date December 23, 2019
 * @version day-4
*/

/*
A six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
Other than the range rule, the following are true:

111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?

Range: 357253-892942
*/

const performance = require("perf_hooks");
const start = performance.performance.now();

populate(357253, 892942);
function populate(min, max) {
  let minArr = [...min.toString()];
  let maxArr = [...max.toString()];

  minArr = minPrune(minArr).map(ele => parseInt(ele));
  maxArr = maxPrune(maxArr).map(ele => parseInt(ele));

  const passwordArr = pwGenerate(minArr, maxArr);
  const partBArr = notMoreThanTwoAdjacent(passwordArr);
  const end = performance.performance.now();

  console.info(("Runtime W/O IO: " + (end - start) + " ms"));
  console.log(passwordArr.length);
  console.log(partBArr.length);

  /*
  Part B:
    Two adjacent matching digits are not part of a larger group of matching digits.
    
    112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
    123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
    111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
  */

  /**
   * Filters passwords based on: 
   *  numbers following the value of the first number must be increasing with 2 digits repeating max.
   * @param {Array} arg Array of passwords
   * @return Array of passwords
   */
  function notMoreThanTwoAdjacent(arg) {
    const cacheArr = [];

    for (ele of arg) {
      let [pwString, cache] = [(ele.join('')), {}];
      for (let i = 0; i < pwString.length; i++) {
        if (cache[pwString[i]] === undefined) {
          cache[pwString[i]] = 1;
        } else {
          cache[pwString[i]] = cache[pwString[i]] + 1;
        }
      }

      let [state, cacheKeys] = [true, Object.keys(cache)];
      const cacheValuesArr = [];
      for (value of cacheKeys.values()) {
        cacheValuesArr.push(cache[value])
      }
      // The right logic but yieled wrong answer.
      // i starts at 1 because 111122 is accepted, repetition of inital value doesn't matter
      for (let i = 1; i < cacheValuesArr.length; i++) {
        if (cacheValuesArr[i] > 2) {
          state = false;
        }
      }

      // if (cacheKeys.length > 1 && cacheKeys.length < 6) {
      //   for (let i = 0; i < cacheKeys.length; i++) {
      //     // not right logic but yieled the right answer ?!?!?!
      //     if (cache[cacheKeys[i]] === 2) {
      //       state = true;
      //     }
      //   }
      // }

      if (state) {
        cacheArr.push(cache);
      }
    }
    return cacheArr;
  }


  /**
   * Generates passwords according to the restrictions.
   * @param {Array} inputMin Array of numbers representing the min-bound after pruning.
   * @param {Array} inputMax Array of numbers representing the max-bound after pruning.
   * @return {Array} Array of passwords.
   */
  function pwGenerate(inputMin, inputMax) {
    let [numMin, numMax] = [parseInt(inputMin.join("")), parseInt(inputMax.join(""))];
    const numArr = [];
    const pwArr = [];

    for (let i = numMin; i <= numMax; i++) {
      numArr.push(i.toString().split("").map(ele => parseInt(ele)));
    }

    for (ele of numArr) {
      if (neverDecrease(ele) && twoAdjacent(ele)) {
        pwArr.push(ele);
      }
    }
    return (pwArr);
  }

  /**
   * Returns new Array of numbers where:
   *  all the remaining numbers in the array following first elemnt are >= the first digit.
   * @param {Array} arg Array of numbers to prune (prior).
   * @return {Array} Array of numbers representing the lowest possible min values with the restrictions.
   */
  function minPrune(arg) {
    const arr = [arg[0]];
    let comp = arg[0];
    for (let i = 1; i < arg.length; i++) {
      if (arg[i] >= comp) {
        comp = arg[i]
        arr.push(comp);
      } else {
        arr.push(comp);
      }
    }
    if (neverDecrease(arr)) {
      return arr;
    }
  }

  /**
   * Returns new Array of numbers where:
   *  all the remaining numbers in the array following first elemnt are >= the first digit
   *  and is less than the numerical value of the input array.
   * @param {Array} arg Array of numbers to prune (prior)
   * @return {Array} Array of numbers representing the lowest possible min values with the restrictions.
   */
  function maxPrune(arg) {
    if (!neverDecrease(arg)) {
      let power = arg.length; // power => 10^6
      let [num, index] = [parseInt(arg.join("")), power - 1];
      // loops through the array of numbers, if arg[i] >= arg[i-1] (meaing this number is less than the previous number),
      // power is reassigned to the position of this occurrence and we exit the loop
      for (let i = 1; i < index; i++) {
        if (arg[i] >= arg[i - 1]) {
          power = index - i;
          break;
        }
      }

      // using the power to generate a new maxArr
      num = Math.floor(num / (10 ** power));
      num = num - 1 + "" + ((10 ** power) - 1);
      return [...num.toString()];
    }
  }

  /**
   * Returns true when:
   *   all the remaining numbers in the array following first element are >= the first digit.
   * @param {Array} arg Array of numbers to check.
   * @return {Boolean}
   */
  function neverDecrease(arg) {
    let [state, comp] = [true, arg[0]];
    for (let i = 1; i < arg.length; i++) {
      if (arg[i] >= comp) {
        comp = arg[i]
      } else {
        state = false;
      }
    }
    return state;
  }

  /**
   * Returns true when:
   *   there is at least 2 numbers of same value thats adjacent.
   * @param {Array} arg Array of numbers to check.
   * @return {Boolean}
   */
  function twoAdjacent(arg) {
    let state = false;
    for (let i = 0; i < arg.length - 1; i++) {
      if (arg[i] === arg[i + 1]) {
        state = true;
      }
    }
    return state;
  }
}
