//Looping a Triangle

//Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

var hashz = ['#', '##', '###', '####', '#####', '######', '#######']
hashz.forEach(function (item) {
  console.log(item)
})
// VM205:4 #
// VM205:4 ##
// VM205:4 ###
// VM205:4 ####
// VM205:4 #####
// VM205:4 ######
// VM205:4 #######



var str = '#######'
str.split('')
   .forEach(function (item, index, arr){
  console.log(str.slice(0, index + 1))
})

// VM313:5 #
// VM313:5 ##
// VM313:5 ###
// VM313:5 ####
// VM313:5 #####
// VM313:5 ######
// VM313:5 #######



// Official
for (var line = '#'; line.length < 8; line += '#') {
  console.log(line)
}
