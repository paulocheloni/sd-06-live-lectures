function soma(numero1, numero2) {
  return numero1 + numero2;
}

function divisao(numero1, numero2) {
  return numero1 / numero2;
}

function menorValor(numero1, numero2) {
  if (numero2 < numero1) {
    return numero2;
  }

  return menor;
}

console.log(soma(2, 2));
console.log(divisao(6, 3));
console.log(menorValor(8, 8));
console.log(menorValor(6, 3));
console.log(menorValor(5, 7));
