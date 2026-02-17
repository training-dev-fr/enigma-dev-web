/**
 * 6. Tarif cinéma
 * Entrée : âge + étudiant (bool).
 * Règles :
 * 
 * < 12 : 6€
 * 
 * 12–25 : 8€ (7€ si étudiant)
 * 
 * 25 : 10€ (8€ si étudiant)
 */

function getcinemaPrice(age, isEtudiant) {
    if (age < 12) {
        return 6;
    }
    if (age < 25) {
        if (isEtudiant) {
            return 7;
        } else {
            return 8;
        }
    }
    if (isEtudiant) {
        return 8;
    } else {
        return 10;
    }
}

console.log(getcinemaPrice(8, false))
console.log(getcinemaPrice(14, false))
console.log(getcinemaPrice(14, true))
console.log(getcinemaPrice(27, false))
console.log(getcinemaPrice(27, true))