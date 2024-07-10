var readline = require("readline-sync");

var chiffreSaisie = parseInt(readline.question("Quelle table de multiplication voulez-vous afficher (jusqu'à) ? "));

if (!isNaN(chiffreSaisie)) {
    let lines = [];
    for (let i = 1; i <= 10; i++) {
        lines[i] = ''; 
    }

    for (let j = 1; j <= chiffreSaisie; j++) {
        for (let i = 1; i <= 10; i++) {
            let resultat = j * i;
            lines[i] += `${j} * ${i} = ${resultat}\t`; 
            if (j % 22 === 0) {
                lines[i] += '\n'; 
            }
        }
    }

    for (let i = 1; i <= 10; i++) {
        console.log(lines[i]);
    }
} else {
    console.log("Veuillez entrer un nombre valide.");
}
