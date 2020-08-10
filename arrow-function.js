function functionName(args) {

}

let func = function() {
  console.log("Olá turma");
}

let arrowFunc = () => {
  console.log("Olá turma");
}

let arrowFunc1Par = (nome) => {
  return console.log("Olá, ", nome);
}

function sum(number1, number2) {
  return number1 + number2;
}

let sum = function(number1, number2) {
  return number1 + number2;
}

let sum = (number1, number2) => number1 + number2;


func();
arrowFunc();
arrowFunc1Par("Oliva");