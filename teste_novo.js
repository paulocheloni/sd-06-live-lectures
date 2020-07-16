function soma(valor1, valor2) {
  let soma = valor1 + valor2;
  return soma;
}

let primeiroValor = 5;
let segundoValor = 10;

let valorRetornado = soma(primeiroValor, segundoValor);

subtracao(valorRetornado, 5);

function subtracao(valor1, valor2) {
  console.log("Primeiro valor: " + valor1);
  console.log("Segundo valor: " + valor2);
  return valor1 - valor2;
}

function menorValor(valor1, valor2) {
  if (valor1 < valor2) {
    return "menor";
  } else if (valor1 === valor2) {
    return "igual";
  } else {
    return "maior";
  }
}

console.log(valorRetornado);

let pessoa = {
  nome: "Bruno",
  dataDeNascimento: "06/02/1985",
  corDosOlhos: "Preto",
  altura: 177,
};

pessoa.cidade = "BH";
pessoa["esporte"] = "Corrida";

for(let propriedade in pessoa) {
  console.log("chave: " + propriedade);
  console.log("valor: " + pessoa[propriedade]);
}

console.log(pessoa);
