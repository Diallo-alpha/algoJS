var readline = require('readline-sync') 
 
console.log("Bienvenue dans ce jeu de devinette !");
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;   
var nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
   
var essais = 1, found = false;
var reste = 5;
   
while (essais < 6)
{
    if (nombre == solution)
    {
        found = true;
        break;
    }
  
    if (nombre < solution)
    {
        console.log(nombre + " encore plus haut. il reste " + reste + " essai(s)");
    }
    else
    {
        console.log(nombre + " encore plus bas. Il reste " + reste + " essai(s)");
    }
  
    nombre = Number(readline.question("Entrez un nombre entre 1 et 100 :"));
    essais++;
    reste--;
}
  
if (!found)
{
    console.log("Perdu... La solution était : " + solution);
}
  
else
{
    console.log("Bravo ! La solution est " + solution + "\n Vous avez trouvé en " + essais + " essai(s)");
}