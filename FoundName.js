/* Part 2
Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false.*/

var names = ["Maria", "Antony", "Joy", "Juan"];
function foundName(){
  var names = ["Maria", "Antony", "Joy", "Juan"];
  var foundName = window.prompt("Nombre a buscar");
  var cont = names.length;
  cosa = null;
  for(x=0; x <= cont; x++){
    if(foundName == names[x]){
      cosa = true;
      x = cont;
    }else{
      cosa = false;
    }
  }
  console.log(cosa);
}
foundName();

