// Você não precisa entender isso por agora!
function retornaNumeroEntreUmESessenta() {
  return Math.ceil(Math.random() * 60);
}

let megaSenaNumbers = geraNumerosSorteados();
let firstPlay = [1, 2, 3, 4, 5, 6];
let secondPlay = [7, 8, 9, 10, 11, 12, 13];
let thirdPlay = [55, 18, 17, 15, 11, 40];
let plays = [firstPlay, secondPlay, thirdPlay];

// gerando os números sorteados da megaSena
function geraNumerosSorteados() {
  let numeros = [];
  for (let i = 0; i < 6; i++) {
    numeros[i] = retornaNumeroEntreUmESessenta();
  }
  return numeros;
}

console.log('Números sorteados: ', megaSenaNumbers);
console.log('--------------------------');

for (let j = 0; j < plays.length; j++) {
  let numberOfHits = verificaNumeroDeAcertos(plays[j], megaSenaNumbers);

  console.log('Jogada ' + (j + 1));
  console.log('tentativas: ' + plays[j]);
  console.log('Total de acertos: ' + numberOfHits);
  console.log('--------------------------');
}

function verificaNumeroDeAcertos(play, numbersMS) {
  let numberOfHits = 0;
  for (let i = 0; i < numbersMS.length; i++) {
    for (let n = 0; n < play.length; n++) {
      if (numbersMS[i] === play[n]) {
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}
