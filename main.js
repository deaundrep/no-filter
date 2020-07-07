/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function(nums){
  let newArr = [];
    for (const item of nums){
      if ((item % 2) !== 0 ){
        newArr.push(item)
      }
  }
  return newArr;
}

const onlyEvens = function(nums){
  let newArr = [];
    for (const item of nums){
      if ((item % 2) === 0 ){
        newArr.push(item)
      }
  }
  return newArr;
}

const shortNamesOnly = function(names){
  let newArr = [];
  for (const item of names){
    if (item.length < 7){
      newArr.push(item)
    }
  }
  return newArr
}

const dNames = function(names){
  let newArr = [];
  for (const item of names){
    if (item.includes('D')){
      newArr.push(item)
    }
  }
  return newArr;
}







/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
