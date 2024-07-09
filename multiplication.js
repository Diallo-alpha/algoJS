var readline = require("readline-sync");

var chiffreSaisie = parseInt(readline.question("quell table de multiplication voukez-vous afficher "));
    for(let i = 0; i <= 10; i++)
    {
        let resultat = chiffreSaisie * i;
        console.log(chiffreSaisie + ' * ' + i +' * ' + resultat);
    }

