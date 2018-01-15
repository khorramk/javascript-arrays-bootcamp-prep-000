
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  arr = [element, ...array];
  
  return arr;
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
   
  array.unshift(element);
  
  return array;
}

function addElementToEndOfArray(array, element){
  var list = [...array, element];
  
  return list;
  
}

 function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
 }
 
 function accessElementInArray(array, index){
   return array[index];
 }