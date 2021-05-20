# ABSTRAÇÃO
# ENCAPSULAMENTO
# Interface
class Elevador:
    def __init__(self):
        """Construtor do elevador"""
        self._andar = 0
        self._chamados = []

    def chamar(self, andar):
        """Adiciona o andar chamado na lista de chamados."""
        self._chamados.append(andar)

    def ir(self):
        """Vai para o próximo andar na lista de chamados."""
        if self._chamados:
            self._andar = self._chamados[0]
            self._chamados = self._chamados[1:]

    def localizar(self):
        """Indica o andar em que o elevador está."""
        return self._andar