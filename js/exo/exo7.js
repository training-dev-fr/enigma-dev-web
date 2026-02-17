/**
 * 7. Validation mot de passe
 * Écrire checkPassword(pwd) qui retourne “OK” si :
 * 
 * au moins 8 caractères
 * 
 * contient au moins 1 chiffre
 * 
 * contient au moins 1 lettre
 * Sinon “KO”.
 */

function passwordCheck(pwd){
    if (pwd.length < 8){
        return false;
    }
    let hasNumb = false;
    let hasLetter = false;
    for ( let char of pwd){
        if (char >= 0 && char<= 9){
            hasNumb = true;
        }
        if (char >= 'a' && char <= 'z'){
            hasLetter = true;
        }   
    }
    return hasNumb && hasLetter;
}

console.log(passwordCheck('azerty'))
console.log(passwordCheck('azerty67'))