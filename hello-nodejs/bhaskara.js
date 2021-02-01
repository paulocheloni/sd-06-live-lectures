const { questionInt } = require('readline-sync');
// const functions = require('./function');
const { calculaX, calculaDelta } = require('./function');

// (-b ± √Δ) / (2 * a).
// Δ = b² - 4ac.
function calculaBhaskara() {
  const a = questionInt('Digite o valor de a: ');
  const b = questionInt('Digite o valor de b: ');
  const c = questionInt('Digite o valor de c: ');
  const delta = calculaDelta(a, b, c);
  console.log('Delta: %s', delta);

  if (delta < 0) {
    console.log('Delta não é positivo. Valor: %s', delta)
    return;
  }

  const resultado = calculaX(a, b, delta);
  console.log("Resultado. x1 = %s, x2 = %s", resultado.x1, resultado.x2);
}

calculaBhaskara();
