/**
 * 5. Année bissextile
 * Écrire isLeapYear(year) (règles réelles : divisible par 4, sauf siècles non divisibles par 400).
 */

function isLeapYear(year) {

    return(year % 4 === 0 && (year % 100!== 0 || year %400 === 0));

}

console.log(isLeapYear(2020));
console.log(isLeapYear(2023));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
