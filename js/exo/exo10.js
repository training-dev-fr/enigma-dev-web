/**
 * 10. Factorielle
 * Écrire factorial(n) (avec boucle). Gestion simple : si n < 0, renvoyer null.
 */

function factorial(n) {
    if (n < 0) {
        return null;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));