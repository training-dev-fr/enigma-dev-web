/**
 * 12. Inverser une chaîne
 * Écrire reverseString(str) sans split().reverse().join().
 */

function reverseString(str){
    let result = ""
    for (let i of str){
        result=i+result
    }
    return result
}

console.log(reverseString("chaine"))