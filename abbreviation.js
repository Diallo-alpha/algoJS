function abreviation(str)
    {
        const nomAbreger = str.split(' ');
        return `${nomAbreger[0]} ${nomAbreger[1].charAt(0)} ${nomAbreger[2].charAt(0)}.`
    }
    console.log(abreviation('alpha diallo loppe'))
    console.log(abreviation('serigne saliou niang'))

// Fonction pour abréger en utilisant uniquement les initiales
function abreviationInitiales(str) {
    const mots = str.split(' '); // Diviser la chaîne en mots
    let abrege = ''; // Initialiser une chaîne pour l'abréviation

    // Parcourir chaque mot et prendre la première lettre
    mots.forEach(mot => {
        abrege += mot.charAt(0).toUpperCase() + '.';
    });

    return abrege; // Retourner l'abréviation
}

console.log(abreviationInitiales('Mouhamadou ndong')); // Afficher "M.N."
console.log(abreviationInitiales('Assance Camara')); // Afficher "A.C."

// Fonction pour abréger en utilisant la première lettre du prénom et le nom complet
function abreviationPrenomNom(str) {
    const mots = str.split(' '); // Diviser la chaîne en mots

    // Prendre la première lettre du prénom et le nom complet
    return `${mots[0].charAt(0).toUpperCase()}. ${mots[mots.length - 1]}`;
}

console.log(abreviationPrenomNom('alpha diallo')); // Afficher "A. Diallo"
console.log(abreviationPrenomNom('serigne saliou niang')); // Afficher "S. Niang"

// Fonction pour abréger en utilisant les premières lettres des mots
function abreviationPremieresLettres(str) {
    const mots = str.split(' '); // Diviser la chaîne en mots

    // Prendre les premières lettres de chaque mot
    let abrege = '';
    mots.forEach(mot => {
        abrege += mot.charAt(0).toUpperCase();
    });

    return abrege; // Retourner l'abréviation
}

console.log(abreviationPremieresLettres('alpha diallo')); // Afficher "AD"
console.log(abreviationPremieresLettres('serigne saliou niang')); // Afficher "SSN"
// Fonction pour abréger en utilisant la première lettre du prénom et la première lettre du nom de famille
function abreviationPrenomNomSimple(str) {
    const mots = str.split(' '); // Diviser la chaîne en mots
    if (mots.length === 2) {
        return `${mots[0].charAt(0).toUpperCase()}. ${mots[1].charAt(0).toUpperCase()}.`;
    } else {
        return `${mots[0].charAt(0).toUpperCase()}. ${mots[1].charAt(0).toUpperCase()}. ${mots[2].charAt(0).toUpperCase()}.`;
    }
}

console.log(abreviationPrenomNomSimple('alpha diallo')); // Afficher "A. D."
console.log(abreviationPrenomNomSimple('serigne saliou niang')); // Afficher "S. S. N."
