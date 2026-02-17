/**
 * 9. Table de multiplication
 * Afficher la table de x (de 1 à 10).
 */

function tableMul(x){
    for(let i = 1; i < 11; i++){
        console.log(x + " x " + i + " = " + x * i);
    }
}

tableMul(5);