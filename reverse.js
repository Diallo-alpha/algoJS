function reverse(text)
    {
     return text.split("").reverse().join("")
    }

    console.log(reverse('Bonjour les gens ceci est un test'));

//essayer avec une function fleché 

const contraire = str => str.split("").reverse().join("")

console.log(contraire("tester avec une function fleché"))
