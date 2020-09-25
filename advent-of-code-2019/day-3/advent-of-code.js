/**
 * @author Don (dl90)
 * @date December 18, 2019
 * @version day-3
 * @TODO part2 and refactor to use objects
*/

const performance = require("perf_hooks");
const start = performance.performance.now();

const fs = require("fs");
const inputPath = __dirname + "/input.txt";
const inputArr = fs.readFileSync(inputPath, "utf-8").trim().split("\n");

const [wireA, wireB] = inputArr; // Destructuring (array only has 2 elements)
const wireAValueArr = [];
const wireBValueArr = [];
const result = [];

const intersectArr = []; //Array sequence: Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2

main()
function main() {
  const startNoIO = performance.performance.now();

  looper(wireA, wireAValueArr);
  looper(wireB, wireBValueArr);
  intersectCoordSelector(positioning(wireAValueArr), positioning(wireBValueArr));
  let manhattanDistance = lowestDistance(result);
  stepCounter();
  const end = performance.performance.now();
  console.info(("Runtime W/O IO: " + (end - startNoIO) + " ms"));
  console.log(manhattanDistance);
  console.info(("Runtime With IO: " + (end - start) + " ms"));
}


function stepCounter() {
  const wireAHistory = positioning(wireAValueArr);
  const wireBHistory = positioning(wireBValueArr);
  let [wireA_xSteps, wireA_ySteps, wireB_xSteps, wireB_ySteps] = [0, 0, 0, 0];

  // console.log(...wireAHistory); //xy
  // // console.log(...wireBHistory); //xy
  // console.log(...result)
  // console.log();


  const xHistory = []
  for (let i = 0; i < wireAHistory.length; i += 2) {
    xHistory.push((wireAHistory[i]));
  }
  console.log(wireAHistory.indexOf(result[0]))
  console.log(wireAHistory.indexOf(result[0], wireAHistory.indexOf(result[0]) + 1))

  for (let i = 0; i < wireAHistory.length; i += 2) {
    // console.log(wireAHistory[i] + " " +  wireAHistory[i+1]);
    wireA_xSteps += Math.abs(wireAHistory[i]);
    wireA_ySteps += Math.abs(wireAHistory[i + 1]);
  }

  // console.log(wireA_xSteps)
  // console.log(wireA_ySteps)
}


/*
Find the intersection point closest to the central port (0,0).
Because the wires are on a grid, use the Manhattan distance for this measurement.

A= (x1, y1),  B=(x2, y2)
Dt (A, B) = Taxicab Distance =  (|x1 - x2|  + |y1 – y2|).

eg:
a= (0,0) b= (6,6)
Dt (a,b) = (|0 - 6|) + (|0 - 6|) => 12 (miminmum distance)
*/
function lowestDistance(arr) {

  for (let i = 0; i < arr.length - 8; i += 8) {
    // console.log(arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5],arr[i+6],arr[i+7]);
    intersectArr.push(intersect(arr[i], arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4], arr[i + 5], arr[i + 6], arr[i + 7]));
  }

  [originX, originY] = [0, 0];
  const distanceToOriginArr = [];
  for (obj of intersectArr) {
    distanceToOriginArr.push(Math.abs(originX - obj.x) + Math.abs(originY - obj.y));
  }

  return distanceToOriginArr.sort()[0];
}

// intersect function from Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Note: another way of getting the intersect can be by grabbing the:
//       common x-value of the vertical segment and the common y-value of the horizontal segment
//       We already know these segments are intersecting and we know they traverse only hrizontally and vertically.
function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  // Check if none of the lines are of length 0
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false
  }
  denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  // Lines are parallel
  if (denominator === 0) {
    return false
  }
  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
  // is the intersection along the segments
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false
  }
  // Return a object with the x and y coordinates of the intersection
  let x = x1 + ua * (x2 - x1)
  let y = y1 + ua * (y2 - y1)
  return { x, y }
}

/**
 * Populates array with coordinates of intersecting line segments with pattern:
 * Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2
 * @param {Array} Arr1 array of x y line segment coordinates (wireA)
 * @param {Array} Arr2 array of x y line segment coordinates (wireB)
 */
function intersectCoordSelector(Arr1, Arr2) {
  let Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2;

  if (Arr1.length === Arr2.length) {
    // *** Nicely formatted console.log ***
    // for(let i = 0; i < Arr1.length; i+=2) {
    //   console.log(i/2 + '  \tWire A:\t' + 'x= ' + Arr1[i] + '    \t|  y= ' + Arr1[i+1]
    //               + '  \t||  \tWire B:\t' + ' x= ' + Arr2[i] + '    \t| y= ' + Arr2[i+1]);
    // }

    for (let i = 0; i < Arr1.length - 2; i += 2) {
      //crazy destructuring assignment of variables (x1,y1 = start) (x2.y2 = end)
      [Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2] = [Arr1[i], Arr1[i + 1], Arr1[i + 2], Arr1[i + 3]];

      //nested for loops allows us to compare one segment from wireA against all the segments of wireB
      for (let j = 0; j < Arr2.length - 2; j += 2) {
        [Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2] = [Arr2[j], Arr2[j + 1], Arr2[j + 2], Arr2[j + 3]];

        // Arr1_x2 - Arr1_x1 !== 0 indicates Arr1 line is traversing horizontally => Arr1_y1 === Arr1_y2 (y-value)
        // Arr2_y2 - Arr2_y1 !== 0 indicates Arr2 line is traversing vertically => Arr2_x1 === Arr2_x2 (x-value)
        // If the y-value of the horizontal line (Arr1_y1 || Arr1_y2) is BETWEEN the starting and ending y-values of any/all lines traversing vertically, and
        // If the x-value of the vertical line (Arr2_x2 || Arr2_x1) is BETWEEN the starting and ending x-values of any/all lines travsersing horizontally,
        // You have an intersect.

        // If Arr1 is traversing horizontally
        if ((Arr1_x2 - Arr1_x1 !== 0 && Arr1_x1 !== 0) && Arr1_y1 === Arr1_y2) {
          // Arr2 needs to be traversing vertically
          if ((Arr2_y2 - Arr2_y1 !== 0 && Arr2_y1 !== 0) && Arr2_x1 === Arr2_x2) {

            // Arr2 positive y movement (vertical: up)
            if (Arr2_y2 - Arr2_y1 > 0) {
              // Arr1 y-value (Arr1_y1 === Arr1_y2) needs to be between Arr2 end and start
              if (Arr1_y1 <= Arr2_y2 && Arr1_y1 >= Arr2_y1) {

                // Arr1 positive x movement (horizontal: right)
                if (Arr1_x2 - Arr1_x1 > 0) {
                  // Arr2 x-value (Arr2_x1 === Arr2_x2) needs to be between Arr1 end and start
                  if (Arr2_x1 <= Arr1_x2 && Arr2_x1 >= Arr1_x1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }

                // Arr1 negative x movement (horizontal: left)
                if (Arr1_x2 - Arr1_x1 < 0) {
                  // Arr2 x-value between Arr1 end and start (Arr2_x1 === Arr2_x2)
                  if (Arr2_x1 >= Arr1_x2 && Arr2_x1 <= Arr1_x1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }
              }
            }

            // Arr2 negative y movement (vertical: down)
            if (Arr2_y2 - Arr2_y1 < 0) {
              // Arr1 y-value between Arr2 end and start
              if (Arr1_y1 >= Arr2_y2 && Arr1_y1 <= Arr2_y1) {

                // Arr1 positive x movement (horizontal: right)
                if (Arr1_x2 - Arr1_x1 > 0) {
                  // Arr2 x-value between Arr1 end and start (Arr2_x1 === Arr2_x2)
                  if (Arr2_x1 <= Arr1_x2 && Arr2_x1 >= Arr1_x1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }

                // Arr1 negative x movement (horizontal: left)
                if (Arr1_x2 - Arr1_x1 < 0) {
                  // Arr2 x-value between Arr1 end and start (Arr2_x1 === Arr2_x2)
                  if (Arr2_x1 >= Arr1_x2 && Arr2_x2 <= Arr1_x1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }
              }
            }
          }
        }

        // symetric ----------------------------------------------------------------------------------------

        // if Arr1 is traversing vertically
        if ((Arr1_y2 - Arr1_y1 !== 0 && Arr1_y1 !== 0) && Arr1_x1 === Arr1_x2) {
          //if Arr2 is traversing horizontally
          if ((Arr2_x2 - Arr2_x1 !== 0 && Arr2_x1 !== 0) && Arr2_y1 === Arr2_y2) {

            // Arr2 positive x movement (horizontal: right)
            if (Arr2_x2 - Arr2_x1 > 0) {
              // Arr1 x-value (Arr1_x1 === Arr1_x2) needs to be between Arr2 end and start
              if (Arr1_x1 <= Arr2_x2 && Arr1_x1 >= Arr2_x1) {

                // Arr1 positive y movement (vertical: up)
                if (Arr1_y2 - Arr1_y1 > 0) {
                  // Arr2 y-value (Arr2_y1 === Arr2_y2) needs to be between Arr1 end and start
                  if (Arr2_y1 <= Arr1_y2 && Arr2_y1 >= Arr1_y1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }

                // Arr1 negative y movement (vertical: down)
                if (Arr1_y2 - Arr1_y1 < 0) {
                  // Arr2 y-value (Arr2_y1 === Arr2_y2) needs to be between Arr1 end and start
                  if (Arr2_y1 >= Arr1_x2 && Arr2_y1 <= Arr1_x1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }
              }
            }

            // Arr2 negative x movement (horizontal: left)
            if (Arr2_x2 - Arr2_x1 < 0) {
              // Arr1 x-value between Arr2 end and start (Arr1_x1 === Arr1_x2)
              if (Arr1_x1 >= Arr2_x2 && Arr1_x1 <= Arr2_x1) {

                // Arr1 positive y movement (vertical: up)
                if (Arr1_y2 - Arr1_y1 > 0) {
                  // Arr2 y-value between Arr1 end and start (Arr2_y1 === Arr2_y2)
                  if (Arr2_y1 <= Arr1_y2 && Arr2_y1 >= Arr1_y1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }

                // Arr1 negative y movement (vertical: down)
                if (Arr1_y2 - Arr1_y1 < 0) {
                  // Arr2 y-value between Arr1 end and start (Arr2_y1 === Arr2_y2)
                  if (Arr2_y1 >= Arr1_y2 && Arr2_y1 <= Arr1_y1) {
                    // Our intersecting segments
                    result.push(Arr1_x1, Arr1_y1, Arr1_x2, Arr1_y2, Arr2_x1, Arr2_y1, Arr2_x2, Arr2_y2);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function looper(input, array) {
  const arr = input.split(",");
  for (ele of arr) {
    directionSeperator(ele, array);
  }
}

/**
 * Pushes the xy coordinate movement values to an array
 * @param {String} str Contains xy coordinate value
 * @param {Array} arr Array holding the xy coordinate values
 */
function directionSeperator(str, arr) {
  const letter = str.charAt(0).toLowerCase();
  const value = parseInt(str.slice(1));

  let [x, y] = [0, 0];
  switch (letter) {
    case "u":
      y += value; // console.log("move up");
      break;
    case "d":
      y -= value; // console.log("move down");
      break;
    case "r":
      x += value; // console.log("move right");
      break;
    case "l":
      x -= value; // console.log("move left");
      break;
    default:
      Error("Invalid direction token.");
  }
  arr.push(x, y);
}

/**
 * Calculates new xy values based on each xy movement.
 * @param {Array} arr Array containing  xy movement info
 * @returns Array of xy values calculated from array of xy movement
 */
function positioning(arr) {
  const positionArr = [];
  let [x, y] = [0, 0];
  positionArr.push(x, y);

  for (let i = 0; i < arr.length; i += 2) {
    let newX = parseInt(arr[i]);
    let newY = parseInt(arr[i + 1]);

    x += newX;
    y += newY;
    positionArr.push(x, y);
  }
  return positionArr;
}
