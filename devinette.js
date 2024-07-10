var readline = require('readline-sync');

console.log("Bienvenue dans ce jeu de devinette !");
// Cette ligne demande à l'utilisateur de choisir le mode de jeu
let choix = parseInt(readline.question('Veuillez taper 1 pour jouer seul, 2 pour jouer à deux : '));

switch (choix) {
    case 1:
        // Jeu en solo : l'ordinateur génère un nombre aléatoire
        var solution = Math.floor(Math.random() * 100) + 1;
        var nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
        var essais = 1, found = false;
        var reste = 5;

        while (essais < 5) {
            if (nombre == solution) {
                found = true;
                break;
            }

            if (nombre < solution) {
                console.log(nombre + " est plus petit. Il reste " + reste + " essai(s).");
            } else {
                console.log(nombre + " est plus grand. Il reste " + reste + " essai(s).");
            }

            nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
            essais++;
            reste--;
        }

        if (!found) {
            console.log("Perdu... La solution était : " + solution);
        } else {
            console.log("Bravo ! La solution est " + solution + "\nVous avez trouvé en " + essais + " essai(s).");
        }
        break;

    case 2:
        // Jeu à deux : un joueur choisit le nombre, l'autre doit deviner
        var solution = Number(readline.question("Joueur 1, entrez un nombre entre 1 et 100 pour que le Joueur 2 le devine : "));
        console.clear(); 
        console.log("Joueur 2, devinez le nombre choisi par le Joueur 1.");
        var nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
        var essais = 1, found = false;
        var reste = 5;

        while (essais < 5) {
            if (nombre == solution) {
                found = true;
                break;
            }

            if (nombre < solution) {
                console.log(nombre + " est plus petit. Il reste " + reste + " essai(s).");
            } else {
                console.log(nombre + " est plus grand. Il reste " + reste + " essai(s).");
            }

            nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
            essais++;
            reste--;
        }

        if (!found) {
            console.log("Perdu... La solution était : " + solution +' vous avez essayer ' +essais + ' fois');
        } else {
            console.log("Felicitation ! La solution est " + solution + "\nVous avez trouvé en " + essais + " essai(s).");
        }
        break;

    default:
        console.log("Choix invalide. Veuillez redémarrer le jeu et choisir 1 ou 2.");
}
