const Product = require('../../models/Product');
const connection = require('../../models/connection');

describe('Product', () => {
  beforeAll(() => {
    connection().then(db => db.collection('products').deleteMany({}));
  });

  describe('.add', () => {
    it('deve conseguir salvar um produto', async () => {
      const mockData = { name: 'Macbook PRO', price: 8000}
      const product = await Product.add(mockData);

      expect(product).toMatchObject(mockData);

      const products = await Product.findAll();

      console.log(products);

      expect(products).toContainEqual(mockData);
    });
  })
});