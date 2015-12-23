export var reverseArray = function (arr) {
  // return arr.reverse()
  var temp = []
  arr.forEach(function (item) {
    temp.unshift(item)
  })
  return temp
}

export var reverseArrayInPlace = function (...args) {
  var arr = [...args]
  var temp = []
  arr.forEach(function (item) {
    temp.unshift(item)
  })
  return temp
}
