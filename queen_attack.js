let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 8;
let posicaoPecaColuna = 6;

let ataqueBemSucedido = false;

// Verificando o ataque na horizontal
if (posicaoRainhaLinha === posicaoPecaLinha) {
  ataqueBemSucedido = true;
}

// Verificando o ataque na vertical
if (posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
}

// Diagonal superior direita

for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna + i;

  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
    break;
  }
}

// Diagonal inferior Direita

for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna + i;

  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
    break;
  }
}

// Diagonal Superior Esquerda

for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna - i;

  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
    break;
  }
}

// Diagonal Inferior Esquerda

for (let i = 1; i < 8; i += 1) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna - i;

  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    ataqueBemSucedido = true;
    break;
  }
}

console.log(ataqueBemSucedido);
