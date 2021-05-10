"""Fizzbuzz: imprime fizz se multiplo de 3 ou buzz se multiplo de 5."""


def fizzbuzz(numero):
    """Recebe um numero, retorna fizz, buzz, fizzbuzz ou o numero."""
    if (numero % 3 == 0) and (numero % 5 == 0):
        return "fizzbuzz"
    elif (numero % 3) == 0:
        return "fizz"
    elif (numero % 5) == 0:
        return "buzz"
    else:
        return str(numero)

def fizzbuzz_limite(limite):
    """Imprime o fizzbuzz de cada numero do 1 até o limite."""
    for numero in range(1, limite+1):
        print(fizzbuzz(numero))

if __name__ == "__main__":
    fizzbuzz_limite(20)

# pseudo testes
assert fizzbuzz(3) == "fizz"
assert fizzbuzz(5) == "buzz"
assert fizzbuzz(15) == "fizzbuzz"
assert fizzbuzz(4) == "4"
