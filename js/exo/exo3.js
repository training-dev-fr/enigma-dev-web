/**
 * 3. Maximum de 3 nombres
 * Écrire max3(a, b, c) qui retourne le plus grand.
 */

function max3(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(max3(1, 5, -7));
console.log(max3(-1, -5, -7));