let num1 = 5;
let num2 = 10;
let num3 = 15;

// Soma
let soma = num1 + num2;

// Subtração
let subtracao = num1 - num2;

// Divisão
let divisao = num1 / num2;

// Multiplicação
let multiplicacao = num1 * num2; 

// Comparação
let comparacao = num1 > num2;

// Condicional

if(num1 > num2) {
    console.log("num1 wins");
} else {
    console.log("num2 wins")
}

// Como saber se o num1 + num 2 é par?
let isEven = ((num1 + num2) % 2 ) == 0

console.log(isEven);

// E o num1 + num2 + num3?
isEven = ((num1 + num2 + num3) % 2 ) == 0

console.log(isEven);


// Switch

let weekDay = 6;

switch(weekDay) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Dia de maldade")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Não existe esse dia, ainda :)")
}

// Iteração em loop

let count = 20;
let sum = 0;

console.log(sum);

for(i = 1; i <= count; i++) {
    sum += i;
}

console.log(sum);

for(i = count; i >= 1; i--) {
    sum -= i;
}

console.log(sum);
