import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import products from '../products';
import addToCart from '../actions';

class ProductList extends React.Component {
  validateQuantity(product, cart, addToCartAction) {
    const productsInCart = cart.filter((item) => item.name === product.name);
    if (productsInCart.length === product.stockQuantity) return false;

    addToCartAction(product);
    return true;
  }

  render() {
    const { addToCartAction, cart } = this.props;

    return (
      <div>
        <h2>Produtos disponíveis</h2>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={ product.name }>
                <td>{product.name}</td>
                <td>
                  R$
                  {product.price}
                </td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={
                      () => this.validateQuantity(product, cart, addToCartAction)
                    }
                  >
                    Adicionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (product) => dispatch(addToCart(product)),
});

const mapStateToProps = (state) => ({
  cart: state.reducer.cart,
});

ProductList.propTypes = {
  addToCartAction: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string,
        price: PropTypes.number,
        stockQuantity: PropTypes.number,
      },
    ),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
