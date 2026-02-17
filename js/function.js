
function sayHello(prenom){
    console.log("Bonjour " + toto);
}

const sayHello2 = () => {
    console.log("Bonjour");
}

function addition(a,b) {
    return a + b;
}

sayHello("Aurélien");
sayHello("Jean");
sayHello("Marie");

let result = addition(3,5);
let result2 = addition(2,8);
let result3 = addition(-10,5);

console.log(result);
console.log(result2);
console.log(result3);