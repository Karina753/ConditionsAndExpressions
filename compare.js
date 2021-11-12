/* Part 3
Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists.*/

var names = ["Maria", "Antony", "Joy", "Juan"];
function concatArrays(){
  var nomAdd = window.prompt("Escriba los nombres separados por los espacios  ");
  var nomArray = nomAdd.split(" ");
  var nueNames = [nomArray + "," + names];
  console.log(nueNames);
}
concatArrays();

