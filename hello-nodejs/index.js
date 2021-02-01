const readline = require('readline-sync');

console.log("Hello world");

const nome = readline.question('Digite seu nome: ');
const sobrenome = readline.question('Digite seu sobrenome: ');

console.log('Nome: %s, Sobrenome: %s', nome, sobrenome);