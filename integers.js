/* Part 4
Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function*/

function largoStrings(){
  var largoNom = window.prompt("Escriba los nombres separados por espacios");
  var arrayNom = largoNom.split(" ");
  var cont = arrayNom.length;
  for(x=0 ; x < cont; x++){
    console.log(arrayNom[x].length);
  }
}
largoStrings();

