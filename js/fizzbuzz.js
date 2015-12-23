// FizzBuzz

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.

var limit = 100

for (var i = 1; i <= limit; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

var limit = 0
while (limit < 100) {
  limit++
  if (limit % 15 === 0) {
    console.log('FizzBuzz')
  } else if (limit % 5 === 0) {
    console.log('Buzz')
  } else if (limit % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(limit);
  }
}
