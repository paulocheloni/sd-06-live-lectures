# comparações encadeadas
preco = 100
20 < preco < 1000 # True
carteira = 100
preco == 100 == carteira # True

# operação de potência
2 ** 3 # 8
2 ** 8 # 256

import math # help(math)
math.sqrt(256) # 16

# tipagem forte
preco = 100
preco + 20 # int com int PODE
preco = 'oi galera'
preco + 20 # str com int NÃO PODE
preco + '$$$' # str com str PODE
raiz = math.sqrt(256)
10 + raiz # int com float PODE

# divisão inteira e resto
15 / 2 # 7.5
15 // 2 # 7
15 % 2 # 1 (resto)
14 % 2 # 0 (resto)

# strings
mensagem = 'oi pessoal'
len(mensagem) # 10
mensagem[0] # o
mensagem[3] # p
mensagem[10 - 1] # l
mensagem[-1] # l
mensagem[-3] # o
mensagem.split() # sem parametros, quebra no primeiro espaço em branco
mensagem[0:6] # slice!

# loops
for caractere in mensagem:
    print(caractere)

for caractere in mensagem:
    print(caractere)
    print('oi') # se está indentado, está no bloco que repete no loop

for caractere in mensagem[:5]: # for no slice, pra parar antes
    print(caractere)


# listas
numeros = [1, 2, 3, 4, 5, 6]

import random # as pilhas vêm com o brinquedo!
random.shuffle(numeros) # embaralha
numeros.sort() # ordena

numeros.append(11) # adiciona item
numeros[:4] # slices em listas!

alfabeto = 'abcdefghijklmnopqrstuvwxyz'
alfabeto.index('h') # 7
alfabeto.index('a') # 0

# slices negativos!
mensagem[-3:] # oal
mensagem[0:-3] # oi pes
mensagem[-3:-1] # oa
mensagem[-3:] # sem segundo parametro significa "até o final"

# operador "in"
13 in numeros
11 in numeros

# dict
pessoa = { nome: 'capi' } # nome? que variavel é essa?
pessoa = { 'nome': 'capi' } # aaah, era uma string. tá bom.
pessoa['nome'] # blz
pessoa.nome # atributo nome? não conheço.

# nem toda chave é uma string, pode ser int, tupla, sei lá
estranho = {1: 'oi', '1': 'blz?'}
estranho[1] # oi
estranho['1'] # blz
estranho[(1,2,3)] = 'capi' # tá ok

# comparando sequências
primeiros = [1, 2, 3]
primeiros == [1, 2, 3] # compara listas numa boa!
primeiros == [1, 3, 2] # ordem importa!
primeiros is [1, 3, 2] # é igual, mas não é o mesmo objeto
(1, 2, 3) == (1, 2, 3) # tuplas também são comparáveis

# e se tiver dois items procurados com .index numa sequencia?
mensagem.index('o') # 0
mensagem.index? # como faz mesmo?
mensagem.index('o', 2) # 2o parametro: comece a contar a partir do indice 2
mensagem.index('o', 2, 5) # 3o parametro: pare de contar no indice 5
# se não encontrou, não retorna -1. LANÇA O ERRO!
