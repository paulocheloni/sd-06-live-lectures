---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->
# 26.4 - Node, HTTP e Express

<!-- slide vertical=true -->

## O que vamos aprender?

1. O que é HTTP;
2. Primeiros passos com express;
3. Configurar Nodemon;
4. Middleware anywhere;
5. Middlewares com `app.use`;
6. Modularizar API para `express.Router`;
7. Middleware de erro e express-rescue;
	
<!-- slide -->

## O que é HTTP?

<!-- slide vertical=true -->

## [🌍 SW Api 🌍](https://swapi.dev/)

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->

## Primeiros passos com express

```bash
npm i express
```

<!-- slide-vertical=true -->

SHOW THE CODE!

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->
## NODEMON

```bash
npm i -D nodemon
```

```js
"scripts": {
  "dev": "nodemon index.js",
  /// ...
},
```

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->

## Middlewares (rotas)

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->

## Middlewares (app.use)

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->

## Router

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide -->

## Middleware de erro 

<!-- slide vertical=true -->

Middleware de erro usando next

```js
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});
```

<!-- slide vertical=true -->

```
npm i express-rescue
```

<!-- slide vertical=true -->

### 🏁 Checkpoint

<!-- slide  -->

### E o frontend? `#sdds`


<!-- slide  -->

## O que aprendemos?

* HTTP.
* Como criar nossa primeira API com 
Express;
* O que são rotas e middlewares;
* Tratando erros com middlewares de erros e express-rescue;

<!-- slide -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/aglwhjui?section=1a7f5e72-14d6-4158-9e10-0fd3508432d0)