// * Ordenar por diretor e título em ordem alfabética, ano em forma decrescente, avaliacao.bom em order decrescente.(Esconder avaliacao.ruim e avaliacoa.medio)
 db.filmes.find({}, { avaliacao: { ruim: 0, medio: 0 } }).sort({diretor: 1, titulo: 1, ano: -1, 'avaliacao.media'})

// * Trazer os filmes onde o diretor é `Quentin Tarantino` e `avalicao.bom` esteja entre 5 e 10.
// Forma 1
db.filmes.find({ diretor: "Quentin Tarantino", 'avaliacao.bom': { $gte: 5, $lte: 10 } });

// Forma 2
db.filmes.find({ diretor: "Quentin Tarantino", 'avaliacao.bom': { $in: [5,6,7,8,9,10] } });

// * Trazer os filmes onde do ano 2014 e `avaliacao.ruim` **não** esteja entre 5 e 10.

// Forma 1
db.filmes.find({ ano: 2014, 'avaliacao.ruim': { $gte: 0, $lte: 5 } });

// Forma 2
db.filmes.find({ ano: 2014, 'avaliacao.ruim': { $not: { $gte: 5, $lte: 10} } });

// Forma 3
db.filmes.find({ ano: 2014, 'avaliacao.ruim': { $nin: [5,6,7,8,9,10] } });

// * Trazer os filmes onde o diretor `Christopher Nolan` ou `Peter Jackson`
db.filmes.find({diretor: { $in: ['Christopher Nolan', 'Peter Jackson']}});

db.filmes.find({ $or: [{diretor: 'Christopher Nolan'}, {diretor: 'Peter Jackson'}]});


// * Filtre os filmes do `Steven Spielberg` que nem o nome seja `Indiana Jones e a Última Cruzada` nem o ano seja 1989. (Usando o operador $nor)

db.filmes.find({diretor: 'Steven Spielberg', $nor: [ {titulo: "Indiana Jones e a Última Cruzada"}, { ano: 1989 } ]});
