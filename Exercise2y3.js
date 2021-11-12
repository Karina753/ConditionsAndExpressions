/*Ejercicio 2
What do the following expressions evaluate to?*/

// false || (true && false); --> False
// true || (11 + 12); --> True
// (31 + 22) || true; --> True
// true && (1 + 7); --> True
// false && (3 + 4); --> False
// (1 + 2) && true; --> True
// (32 * 4) >= 129; --> False
// false !== !true; --> False
// true === 4; --> False
// false === (847 === '847'); --> True
// false === (887 == '887'); -->  False
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; --> True

/* Exercise #3
rangoNum(25);
rangoNum(75);
rangoNum(125);
rangoNum(-25);*/

function rangoNum(a){
  var rango = a;
  if(rango >= 0 && rango <= 25){
    console.log(`${rango} esta entre 0 y 25`)
  }else if(rango >= 26 && rango <= 100){
    console.log(`${rango} esta entre 26 y 100`)
  }else if(rango > 100){
    console.log(`${rango} esta por arriba de 100`)
  }else if(rango < 0){
    console.log(`${rango} es menor que 0`)
  }
}
rangoNum(125);