/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


// input (1, 5)
// output [1, 2, 3, 4, 5]

var range = function (min, max) {
	var arr = []
	for (var i = min; i < max; i++) {
		arr.push(i + 1)
	}
	return arr
}

var ranger = function (min, max, inc) {
	var arr = []
	for (var i = min; i < max; i++) {
		arr.push(i + inc)
	}
	return arr
}

console.log(ranger(1, 10, 2))

console.log(range(12, 18))

var sum = function (arr) {
	var total = arr.reduce(function (a, b) {
		return a + b
	}, 0)
	return total
}
console.log(sum([1, 2, 3, 4, 5]))
