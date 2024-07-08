
let numbers = [4, 2, 9, 1, 8];

function divideArray(array) {
  let paire = [];
  let impaire = [];
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
         paire.push(array[i]);
      } else {
         impaire.push(array[i]);
      }
  }
  
  console.log("nombre paire:");
  
  if (paire.length <= 0) {
    console.log("il n'y pas de nombre paire dans le tableux");
  } else {
    const plusPetiPaire = paire.sort((a, b) => a - b);
    plusPetiPaire.forEach((n) => console.log(n))
  }
  
  console.log("nombre impaire:")
  
  if (impaire.length <= 0) {
    console.log("None");
  } else {
    const petiImpaire = impaire.sort((a, b) => a - b);
    petiImpaire.forEach((n) => console.log(n))
  }
}

divideArray(numbers);