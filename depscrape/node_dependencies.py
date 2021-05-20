"""Extrai uma lista de dependencias de um projeto json."""
import json

class Dependencia:
    def __init__(self, nome, versao):
        """Cria uma dependencia a partir de uma linha do requirements.txt"""
        self.nome, self.versao = nome, versao
    
    def busca_url(self):
        """Retorna uma url para esta dependencia."""
        return f"https://www.npmjs.com/package/{self.nome}"

class Projeto:
    def __init__(self, path):
        self.package_json = self.busca_package_json(path)

    def busca_package_json(self, path):
        # TODO: procurar recursivamente pelo bendito requirements.txt
        return "package.json"

    def busca_dependencias(self):
        with open(self.package_json) as package_json:
            dados = json.load(package_json)
            return [
                Dependencia(nome, versao) 
                for nome, versao 
                in dados['dependencies'].items()]