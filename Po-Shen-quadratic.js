/**
 * @author Don (dl90)
 * @date December 31, 2019
 * @note https://www.youtube.com/watch?v=XKBX0r3J-9Y
*/

// 15x^2 + 2x + -1 = 0
console.log(quadratic(15, 2, -1))
console.log(quadratic(4, -20, 25))

/**
 * Solves quadratic ( ax^2 + bx + c = 0 ) with Po-Shen method
 * @param {Number} a quadratic coefficient
 * @param {Number} b linear coefficient
 * @param {Number} c constant
 */
function quadratic (a, b, c) {
  const denominator = a
  let sum = -b
  let halfSum = sum / 2
  let constant = c

  if (denominator !== 1) {
    sum /= denominator
    halfSum = sum / 2
    constant /= denominator
  }

  const square = halfSum ** 2
  const equ = square - constant
  const rootEqu = Math.sqrt(equ)

  const ansPos = halfSum + rootEqu
  const ansNeg = halfSum - rootEqu

  return { positive: ansPos, negative: ansNeg }
}
