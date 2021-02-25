---
presentation:
  width: 1920
  height: 1080
  theme: white.css
  previewLinks: true
---

<!-- slide -->
# 28.1 - Autenticação com JWT

<!-- slide vertical=true -->

## O que vamos aprender?

* Algoritmos de criptografia
* O que é JWT;
* Como funciona o JWT;
* Como implementar o JWT;
* BCrypt;
	
<!-- slide -->

## Algoritmos de criptografia

* Simétrica
* Assimétrica

<!-- slide vertical=true -->

### O que é Hash?

* É  um algoritmo que gera um output com um tamanho fixo **independente** do tamanho do input. 
* É um processo one-way: não pode ser revertido.

<!-- slide vertical=true -->

### O que é HMAC?

* Message Authentication Code (hash de código de autenticação de mensagem com chave hash) 
* Serve para gerar um MAC criptografado através de algum algoritmo de hash 
* Os algoritmos que codificam mensagens em formato mais utilizado são: md5, sha1 e sha256.
* É possível gerar um hash a partir de um segredo (como uma senha) e de uma mensagem qualquer.

<!-- slide vertical=true -->

## O que é RSA?

* O RSA é um algorítmo de criptografia **assimétrica** que utiliza, como já vimos, uma chave pública e uma privada. 
* Tudo que é criptografado pela chave pública só pode ser descriptografado pela chave privada.
* Uma mensagem criptografada com uma chave pública só pode ser lida pela pessoa que gerou aquele par de chaves, pois essa pessoa é a única que possui a chave privada para descriptografá-la.

<!-- slide vertical=true -->

### 🤔 Dúvidas 🤔

<!-- slide -->

## O que é JWT?

JSON WEB TOKEN. É stateless.

<!-- slide vertical=true -->

![Imagem](https://i.stack.imgur.com/0XrpT.png)

<!-- slide -->

## Como funciona o JWT?

Um token JWT é formato por três partes: **Header**, **Payload** e **Assinatura**;

<!-- slide vertical=true -->

## Como um token é gerado?

![Imagem](./pipeline.png)

<!-- slide vertical=true -->

## Decodificar para base64

```bash
echo '{"alg":"HS256","typ":"JWT"}' | base64
echo eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9Cg= | base64 -d
```

<!-- slide vertical=true -->

## [Como ver as partes do token JWT](https://jwt.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.reGQzG3OKdoIMWLDKOZ4TICJit3EW69cQE72E2CfzRE)

<!-- slide vertical=true -->

### [🤔 Dúvidas 🤔](https://wall.sli.do/event/h6w73lgj?section=f6fed573-9af6-4164-a1cb-1ebcb5f2cac2)

<!-- slide vertical=true -->

<!-- slide  -->

## Como implementar o JWT

1. Como criar um token JWT.
2. Como validar um token JWT.

<!-- slide vertical=true -->

Lets`code!

<!-- slide  -->

## Bcrypt

Lets`code!