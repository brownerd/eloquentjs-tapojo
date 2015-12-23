// Chess Board

// Write a program that creates a string that represents an 8 × 8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

/*

Passing this string to console.log should show something like this:

# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/



var size = 8

var board = ''

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  board += '\n'
}

console.log(board)




/*


function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
  }

console.log(power(2, 3));



var tile = '# '
var row = [tile]

function printer (width) {
  if (width === 0) {
    return tile
  } else {
    width--
    return row.push(tile)
  }
}



var tile = '# '
var row = ['\n']
var stack = []
var size = 3

while (size--){
  [].push(tile)
}
return stack..join('')

function printer (size) {
  while (width--){
    row.unshift(tile)
  }
  return stack..join('')
}

console.log(printer(3, 3))

[['# ', '# ', '# '], ['# ', '# ', '# '], ['# ', '# ', '# ']]

function checkerBoard (size) {
  col = []
  row = []

}


*/
