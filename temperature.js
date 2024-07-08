function conversion(deg)
    {
        /*Écrire un algorithme qui convertit une température donnée en degrés Celsius en Fahrenheit.*/
        if(typeof deg === "number")
        {
            let Fahrenheit = deg * 9/5 + 32;
        
            return Math.trunc(Fahrenheit);
        }
        else {
            return "veilleir donner un entre coreect";
        }
    }
// console.log(conversion(-34));
// console.log(conversion(20));

/*function flechée  quand y'a u seul return */

const conversionF = deg => typeof deg === "number" ? Math.trunc(deg * (9/5) + 32) : "donner en entrer non correct";
// console.log(conversionF('12'));

/* exercice 2 Écrire un programme qui demande à l'utilisateur une série de nombres, puis calcule et affiche leur moyenne.*/
var nb =prompt("Combien avez-vous de notes à entrer ?");
cpte = 0;
for(var i=1; i <= nb; i++) {
    cpte += prompt('note ' + i) * 1
}
console.log('moyenne des '+ nb + ' notes : ' + cpte / nb)