/**
 * 8. Somme de 1 à N
 * Écrire sumTo(n) avec une boucle.
 */

function sumTo(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum +=i;
    }
    return sum;
}

console.log(sumTo(2));
console.log(sumTo(5));
console.log(sumTo(10));