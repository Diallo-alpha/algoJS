function nombreVoyelle(str) {
    // Déclaration d'un tableau contenant les voyelles
    const voyelles = ['a', 'o', 'u', 'e', 'y', 'i'];
    
    // Initialisation du compteur de voyelles
    let nbrVoyelle = 0;

    // Parcourir chaque caractère de la chaîne de caractères `str`
    for(let i = 0; i < str.length; i++) {
        // Parcourir chaque voyelle dans le tableau `voyelles`
        for(let j = 0; j < voyelles.length; j++) {
            // Vérifier si le caractère actuel est une voyelle
            if(str[i] === voyelles[j]) {
                // Incrémenter le compteur de voyelles
                nbrVoyelle += 1;
            }
        }
    }
    // Retourner le nombre total de voyelles trouvées
    return nbrVoyelle;
}

// Appeler la fonction et stocker le résultat
const resultat = nombreVoyelle('zzzzzzzzzzzzzz');

// Afficher le nombre de voyelles dans la chaîne donnée
console.log("Dans cette phrase on a " + resultat + " voyelles");

/* Utiliser regex pour l'exo */
function getVoyelle(txt) {
    // Trouver toutes les voyelles dans le texte
    const voyell = txt.match(/[aoieyu]/gi);
    // 'match' va retourner un tableau avec toutes les voyelles trouvées
    console.log(voyell);
    
    // Si des voyelles sont trouvées, retourner leur nombre
    if(voyell) {
        return voyell.length;
    } else {
        // Si aucune voyelle n'est trouvée, retourner 0
        return 0;
    }
}

// Tester la fonction avec un exemple de texte
console.log(getVoyelle('alpha'));
console.log(getVoyelle('tester le nombre de voyelle avec le regex'));

// Utiliser une fonction fléchée pour faire la même chose
const getVowels = test => test.match(/[aoieyu]/gi) ? test.match(/[aoieyu]/gi).length : 0;

// Afficher le nombre de voyelles trouvées avec la fonction fléchée
console.log("On a avec la fonction fléchée " + getVowels('test fléché o') + " voyelles");
