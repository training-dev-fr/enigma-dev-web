/**
 * 17. Compter une occurrence
 * Écrire countChar(str, char) qui retourne combien de fois char apparaît dans str.
 */

function countChar(str, char){
    let count = 0;
    for(let ch of str){
        if(ch.toLowerCase() === char.toLowerCase()){
            count++;
        }
    }
    return count;
}

console.log(countChar("Hello","l"));
