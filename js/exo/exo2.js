/**
 * 2. Signe d’un nombre
 * Demander un nombre et afficher : positif, négatif ou zéro.
 */

function isPositive(n) {
    if(n>0){
        return 'positif';
    }else if(n<0){
        return 'negatif';
    }else{
        return '0';
    }
}

console.log(isPositive(6))
console.log(isPositive(0))
console.log(isPositive(-6))