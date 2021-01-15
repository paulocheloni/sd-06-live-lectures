* Ordenar por diretor e título em ordem alfabética, ano em forma decrescente, avaliacao.bom em order decrescente.(Esconder avaliacao.ruim e avaliacoa.medio)
* Trazer os filmes onde o diretor é `Quentin Tarantino` e `avalicao.bom` esteja entre 5 e 10.
* Trazer os filmes onde do ano 2014 e `avaliacao.ruim` **não** esteja entre 5 e 10.
* Trazer os filmes onde o diretor `Christopher Nolan` ou `Peter Jackson`
* Filtre os filmes do `Steven Spielberg` que nem o nome seja `Indiana Jones e a Última Cruzada` nem o ano seja 1989. (Usando o operador $nor)
* Inserindo o determinado registro:
```js
db.filmes.insertOne({title: 'Deadpool 3'})
```
Retorne os filmes sem diretor.

* Deletar todos os filmes de J.K. Rowling


