/**
 * 20. Menu interactif (mini programme)
 * Créer un petit menu en boucle :
 * 
 * Addition
 * 
 * Soustraction
 * 
 * Multiplication
 * 
 * Division
 * 
 * Quitter
 * Le programme demande le choix + 2 nombres et affiche le résultat.
 * (Option : gérer division par 0.)
 */
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function menu() {
    console.log("1. Addition");
    console.log("2. Soustraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Quitter");
    rl.question(`Choose option :`, name => {
        if (name === "5") {
            return;
        }
        rl.question(`Number: 1`, a => {
            rl.question(`Number: 2`, b => {
                a = parseFloat(a);
                b = parseFloat(b);
                switch (name) {
                    case "1":
                        console.log("result : " + sum(a, b));
                        break;
                    case "2":
                        console.log(sub(a, b));
                        break;
                    case "3":
                        console.log(mul(a, b));
                        break;
                    case "4":
                        console.log(div(a, b));
                        break;
                }
                menu();
            });
        });


    });

}

menu();