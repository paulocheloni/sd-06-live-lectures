# 26.1 - Introdução a desenvolvimento web com Node.js

### O que vamos aprender?

- [ ] Criar nosso primeiro script node.
- [ ] Criar nosso primeiro pacote npm.
- [ ] Criar scripts no package.json
- [ ] Como instalar pacotes de terceiros dentro do nosso pacote. 
- [ ] Como imporar e exportar módulos (Módulos x Pacotes)
- [ ] Como exibir strings e variáveis com `console.log`
- [ ] Como ler dados do console com a biblioteca [`readline-sync`](https://www.npmjs.com/package/readline-sync)

### Módulos x Pacotes

```
A package is a file or directory that is described by a package.json file.
A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.
Note: Since modules are not required to have a package.json file, not all modules are packages. Only modules that have a package.json file are also packages.
```

[Documentação do NPM](https://docs.npmjs.com/about-packages-and-modules)

### Caso de uso

Criar um script para calcular a fórmula de Bhaskara: 

* `(-b ± √Δ) / (2 * a)`.
* ` Δ = b² - 4ac.`


Passos: 

- [ ] Função para calcular delta
- [ ] Função para calcular Bhaskara usando delta
- [ ] Ler os valores de a, b e c.
- [ ] Validar se delta é positivo. Se for negativo, exibir mensagem, se não calcular Bhaskara


### Links úteis

* [Semantic Version](https://semver.org/lang/pt-BR/)
* [Licenças de projetos open source](https://medium.com/trainingcenter/tudo-o-que-voc%C3%AA-precisa-saber-sobre-as-licen%C3%A7as-de-projetos-open-source-aaccbe23e50d)

