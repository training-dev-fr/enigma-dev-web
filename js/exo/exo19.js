/**
 * 19. Générer un mot de passe
 * Écrire generatePassword(length) qui retourne une chaîne aléatoire contenant lettres + chiffres.
 * Contrainte : au moins 1 chiffre.
 */

let char = "abcdefghijklmnopqrstuvwxyz";
let figure = "0123456789";

function generatePassword(length){
    let password = "";
    for(let i = 0;i<length-1;i++){
        password += char[Math.floor(Math.random()*char.length)];
    }
    password += figure[Math.floor(Math.random()*figure.length)];
    return password;
}

console.log(generatePassword(5));
console.log(generatePassword(10));
