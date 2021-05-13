"""Salva os dados em csv com cabeçalho."""
import csv


def save_to_csv(data):
    """Escreve os dados em um arquivo csv."""
    with open('dependencies.csv', 'w') as output:
        writer = csv.DictWriter(output, data[0].keys())
        writer.writeheader()
        for item in data:
            writer.writerow(item)