from elevators.elevator import Elevador

def test_elevador():
    # arrange
    elevador = Elevador()
    # act
    elevador.chamar(2)
    elevador.chamar(3)
    elevador.chamar(4)
    elevador.ir()
    # assert
    assert elevador.localizar() == 2
