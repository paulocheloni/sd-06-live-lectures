## Projeto - WebChat
![WEBCHAT](https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/boas-praticas-para-o-chat-comercial.png)

---

### Habilidades
* Arquitetura MVC (Model + View + Controller);
* Socket.io (Front + Back);
* DOM (JavaScript);
* Extra (CSS);

---

### Configurações

* ESLint (Qualidade do código);
* models/connection.js (Acessar o MongoDB);
* Variáveis de ambiente;

```
DB_URL=mongodb://localhost:27017/webchat/
DB_NAME=webchat 
```

---

### Requisitos

1. Crie um back-end para conexão simultânea de clientes e troca de mensagens em chat público;

* Aplicação inicializada no server.js
* Evento deve ter o nome `message` e enviar os parâmetros `{ chatMessage, nickname }`

```
DD-MM-yyyy HH:mm:ss ${message.nickname} ${message.chatMessage}
```

```
09-10-2020 2:35:09 PM - Joel: Olá meu caros amigos!
```

---

### Requisitos

2. Crie um frontend para que as pessoas interajam com o chat;
  - Front e Back usam a mesma porta (3000);
  - Não esquecer data-testid="" (E não colocar no lugar errado);
  - Nickname aleatório de 16 caracteres (Momento de acesso);

---

### Requisitos

3. Elabore o histórico do chat para que as mensagens persistam;
  - Configurar o banco de dados (Certifique-se que o Mongo está ativo);
  - Database `webchat` e collection `messages`;
  - As mensagens enviadas devem persistir (Refresh);
  - Estrutura de um Documento a ser salvo no banco;

```
  {
    message: 'Lorem ipsum',
    nickname: 'xablau',
    timestamp: '2021-04-01 12:00:00'
  }
```

---

### Requisitos

4. Informe a todos os clientes quem está online no momento;
  - Lista de clientes online;
  - Mudar nome ou desconectar afetam a lista de clientes;

---

### Não custa Lembrar

* npm test nome_do_arquivo (Rodar teste específico);
* package.json scripts (Comandos pré-definidos);

---

### Dicas

* Tem algumas dicas nos requisitos;
* Ler todos os requisitos antes de começar o projeto;
* Os requisitos conversam entre si;
* Se achar que vale a pena usar algum dependência externa, use-a;

---

### Verdades

* A aula de ontem do Renatão ajuda muito no projeto;
* Terão requisitos que demorarão um pouco mais para fazer;

---

# LEIA O README
![READ](https://media.giphy.com/media/VgY4dDdN1W3NS/source.gif)

---

# LEIA O README
![READ](https://media.giphy.com/media/TwJ6ix2kjxloQ/source.gif)

---

# LEIA O README!
![READ](https://media.giphy.com/media/NFA61GS9qKZ68/source.gif)

---

# Frase do dia

* "A derrota de hoje não será maior que a derrota de amanhã!"

![bux](./bux.jpeg)

---

# Dúvidas

![DUVIDAS](https://media.giphy.com/media/enlrH494ZGq1aCjNw7/giphy.gif)
