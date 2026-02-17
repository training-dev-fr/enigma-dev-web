/**
 * 14. Plus grand élément d’un tableau
 * Écrire maxArray(arr) sans Math.max(...arr).
 */

function maxArray(arr){
    let max = arr.shift();
    for(let element of arr){
        if(element > max){
            max = element;
        }
    }
    return max;
}

console.log(maxArray([1,3,5]));
console.log(maxArray([-10,-20,-2]));
console.log(maxArray([-10,52,17]));
console.log(maxArray([12,-5,5]));

