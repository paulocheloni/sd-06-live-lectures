const fs = require("fs");
const util = require('util');



const readFilePromise = util.promisify(fs.readFile);

readFilePromise("./arquivo.txt")
  .then((content) => {
    console.log(`Lido arquivo com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });