/**
 * 13. Nombre premier
 * Écrire isPrime(n) (retourne true/false).
 * Optimisation simple : tester jusqu’à sqrt(n).
 */

function isPrime(n){
    for(let i = 2;i <Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(27));
