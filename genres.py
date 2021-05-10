"""Le a informação dos jogos de um catalogo e enumera os generos usados."""
import json


with open('games.json') as catalogo:
    jogos = json.load(catalogo)

generos = set() # pega apenas generos unicos
for jogo in jogos:
    generos_do_jogo = jogo['Metadata']['Genres'].split(',')
    for genero in generos_do_jogo:
        generos.add(genero)

for numero, genero in enumerate(generos, start=1):
    print(numero, genero)