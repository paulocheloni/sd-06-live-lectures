"""Extrai uma lista de dependencias de um projeto python."""

class Dependencia:
    def __init__(self, line):
        """Cria uma dependencia a partir de uma linha do requirements.txt"""
        self.nome, self.versao = line.split('==')
    
    def busca_url(self):
        """Retorna uma url para esta dependencia."""
        return f"https://pypi.org/project/{self.nome}/"

class Projeto:
    def __init__(self, path):
        self.reqtxt = self.busca_reqtxt(path)

    def busca_reqtxt(self, path):
        # TODO: procurar recursivamente pelo bendito requirements.txt
        return "requirements.txt"

    def busca_dependencias(self):
        with open(self.reqtxt) as reqtxt:
            dependencias = []
            for line in reqtxt:
                dependencia = Dependencia(line)
                dependencias.append(dependencia)

            return dependencias