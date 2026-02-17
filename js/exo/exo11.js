/**
 * 11. Compter les voyelles
 * Écrire countVowels(str) sans regex (boucle sur la chaîne).
 */

const countVowels = (str) => {
    const vowels = "aeiouy"
    return str.toLowerCase().split("").filter(c => vowels.includes(c)).length
}

const countVowels2 = (str) => {
    const vowels = "aeiouy";
    const lowerStr = str.toLowerCase();
    let count = 0;
    for(let char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels2("Bonjour"))