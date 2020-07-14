// 60 opções, 1 até 60
// Escolha de no minímo 6 números
// Se acertar 4 números, você recebe um valor pequeno
// Se acertar 5 números, você recebe um valor médio
// Se acertar 6 números, você recebe um valor grande

function retornaNumeroEntreUmESessenta() {
  return Math.ceil(Math.random() * 60);
}

// Array para armazenamento dos nossos números
let firstPlay = [6, 19, 26, 35, 57, 58];
let secondPlay = [1, 2, 3, 4, 5, 6];
let thirdPlay = [7, 8, 9, 10, 11, 12, 13];

let plays = [firstPlay, secondPlay, thirdPlay];
// Array com os números da sorteados
let megaSenaNumbers = [];
let firstNumber = retornaNumeroEntreUmESessenta();
let secondNumber = retornaNumeroEntreUmESessenta();
let thirdNumber = retornaNumeroEntreUmESessenta();
let fourthNumber = retornaNumeroEntreUmESessenta();
let fifthNumber = retornaNumeroEntreUmESessenta();
let sixthNumber = retornaNumeroEntreUmESessenta();
megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

// Verificar a quantidade de números acertados
/// Ter uma variável que guarda a quantidade de números certos
/// Ter uma forma de comparar os dois arrays

console.log("Números sorteados: " + megaSenaNumbers);

for (let indice = 0; indice < plays.length; indice += 1) {
  let numberOfHits = 0;

  for (let posicao = 0; posicao < megaSenaNumbers.length; posicao += 1) {
    for (let posicaoInterna = 0; posicaoInterna < plays[indice].length; posicaoInterna += 1) {
      if (megaSenaNumbers[posicao] === plays[indice][posicaoInterna]) {
        numberOfHits += 1;
      }
    }
  }
  console.log("Número de acertos: " + numberOfHits);
} 



