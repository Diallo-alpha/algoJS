/**/ 
var nb =prompt("Combien avez-vous de notes à entrer ?");
cpte = 0;
for(var i=1; i <= nb; i++) {
    cpte += prompt('note ' + i) * 1
}
console.log('moyenne des '+ nb + ' notes : ' + cpte / nb)