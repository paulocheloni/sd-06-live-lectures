from elevators.elevator import Elevador

class TerreoElevador(Elevador):
    def ir(self):
        """Vai para o próximo andar na lista de chamados,
        mas se não tiver chamado volta pro térreo."""
        if not self._chamados:
            self._andar = 0
        else:
            super().ir()