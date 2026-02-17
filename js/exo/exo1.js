/**
 * 1. Pair / impair
 * Écrire une fonction isEven(n) qui retourne true si n est pair, sinon false.
 */

function isEven(n){
  return n%2==0;
}



function isEven(n){
    if(n < 0){
        return isEven(-n);
    }
    if(n === 1){
        return false;
    } else if(n === 2){
        return true;
    } else{
        return isEven(n - 2);
    }
}

console.log(isEven(-10000))