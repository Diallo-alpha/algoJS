var texte = 'Salut tout le monde, c\'est un texte pour tester le code... Salut tout le monde, c\'est un texte pour tester le code...';
var text=texte.split(' ');
var k=0;
console.clear();
function getMot(mot){
k=0;
for(var j=0;j<text.length;j++){
if(mot==text[j])k++;
}
return k;
}
for (let mot of text) { 
console.log(mot +': est repeté '+ getMot(mot) + ' fois \n');
}