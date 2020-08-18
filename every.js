const ages = [23, 32, 16, 17, 34];

console.log("Todas as idades são maiores de 18 anos " + ages.every(age => age > 18));


const list = ['Aprovado', 'Reprovado', 'Recuperação'];

console.log(list.some(element => element.toLowerCase() == "aprovado".toLowerCase()));


const ages = [23, 32, 16, 17, 34];

// EVERY === E -> &&
// if(23 > 18 && 32 > 18 && 16 > 18) {

// }

// SOME === OU -> ||
// if(23 > 18 || 32 > 18 || 16 > 18) {

// }