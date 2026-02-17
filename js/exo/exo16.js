/**
 * 16. FizzBuzz (classique)
 * Écrire fizzBuzz(n) qui affiche de 1 à n :
 * 
 * multiple de 3 : “Fizz”
 * 
 * multiple de 5 : “Buzz”
 * 
 * multiple des deux : “FizzBuzz”
 * 
 * sinon le nombre
 */

function fizzBuzz(n){
    for(let i=0; i<=n; i++){
        let result = "";
        if(i%3 === 0){
            result = "Fizz";
        }
        if(i%5 === 0){
            result += "Buzz";
        }
        if(result === ""){
            result = i;
        }
        console.log(i + ": " + result);
    }
}

console.log(fizzBuzz(15));
