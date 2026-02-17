/**
 * 15. Moyenne des notes
 * On te donne un tableau notes.
 * Afficher la moyenne + “admis” si moyenne >= 10 sinon “non admis”.
 */

function noteMoy(arr) {
    let sumNote = 0;
    for (let note of arr) {
        sumNote += note;
    }
    const moyNote = sumNote / arr.length;
    let message = null;
    if(moyNote >= 10) {
        message = "admis";
    }else{
        message = "non admis";
    }
    return {moyenne: moyNote, mess: message}
}
console.log(noteMoy([18,3,17,10,11,9,19]));
console.log(noteMoy([2,3,7,0,1,9,4]));