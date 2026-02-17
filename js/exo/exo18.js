/**
 * 18. Palindrome
 * Écrire isPalindrome(str) (ignorer la casse). Bonus : ignorer espaces.
 */

function reverseString(str){
    let result = ""
    for (let i of str){
        result=i+result
    }
    return result
}

function isPalindrome(str){
    return str === reverseString(str);
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("Hello"));
