if(age >= 18){
    console.log("Age supérieur à 18")
}else if(age >= 15){
    console.log("Age supérieur à 15 et inférieur à 18")
}else{
    console.log("Age inférieur à 15")
}


age >=15?console.log("Age supérieur à 15"):console.log("Age inférieur à 15");

let alertLevel = "danger";

switch(alertLevel){
    case null:
        console.log("pas d'alerte");
        break;
    case "warning":
        console.log("alerte de niveau warning");
        break;
    case "error":
    case "danger":
        console.log("alerte de niveau erreur");
        break;
}