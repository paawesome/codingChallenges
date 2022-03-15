// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let grow = n => n.reduce ((a, b) => a * b, 1)

console.log(grow([1,2,3,4]))