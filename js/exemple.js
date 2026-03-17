Array.prototype.forEach2 = function (predicate) {
    for (let element of this) {
        predicate(element);
    }
}

Array.prototype.map2 = function (predicate) {
    let result = [];
    for (let element of this) {
        result.push(predicate(element));
    }
    return result;
}

Array.prototype.filter2 = function(predicate){
    let result = [];
    for (let element of this) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
}

let arr = [1, 3, 5, 7];

let arr2 = arr. filter2(element => element < 4);

console.log(arr2);