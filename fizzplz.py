"""Pede um numero pro usuario, fizzbuzz no numero."""
from fizzbuzz import fizzbuzz
import sys


def pedir_numero():
    """Pede numero e retorna"""
    try:
        resposta = input("Digite um numero inteiro por favor: ")
    except KeyboardInterrupt:
        print("\ndeixa quieto.")
        sys.exit()

    try:
        return int(resposta)
    except ValueError:
        print(f"_{resposta}_ aí não é um número.")
        return pedir_numero()


numero = pedir_numero()
resultado = fizzbuzz(numero)
print(resultado)