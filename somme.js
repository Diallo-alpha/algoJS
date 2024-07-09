
const readline = require("readline-sync");

let nombreChiffre = parseInt(readline.question('Combien de chiffres voulez-vous additionner ? '));

while(isNaN(nombreChiffre) || nombreChiffre <= 0) {
    nombreChiffre = parseInt(readline.question('Veuillez entrer un nombre entier positif pour continuer : '));
}

let somme = 0;

for(let i = 1; i <= nombreChiffre; i++) {
    let chiffre = parseFloat(readline.question(`Entrer le chiffre ${i} : `));
    
    while(isNaN(chiffre) || chiffre < 0) {
        chiffre = parseFloat(readline.question('Entrez un nombre positif : '));
    }

    somme += chiffre;
    if(chiffre === 0) {
        break;
    }
}

console.log('La somme des chiffres que vous avez saisis est : ', somme);
