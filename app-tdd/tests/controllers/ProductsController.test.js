const ProductsController = require('../../controllers/ProductsController');
const Product = require('../../models/Product');

describe('ProductsControllers', () => {
  describe('.add', () => {
    it('deve salvar um produto válido', async () => {
      // arranjo
      const mockReq = {
        body: {
          name: "Macbook Pro",
          price: 8000
        }
      };
      
      mockRes = {
        status: jest.fn(),
        json: jest.fn(),
        something: jest.fn()
      }
      
      const spyAdd = jest.spyOn(Product, 'add');
      
      // acão
      await ProductsController.add(mockReq, mockRes);
      
      // assert
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        name: "Macbook Pro",
        price: 8000
      });
      expect(spyAdd).toHaveBeenCalledWith({
        name: "Macbook Pro",
        price: 8000
      });
      
    });
    
    it('não deve salvar um produto sem preço', async () => {
      const mockReq = {
        body: {
          name: "Macbook Pro",
        }
      };
      
      mockRes = {
        status: jest.fn(),
        json: jest.fn(),
      }
      
      // acão
      await ProductsController.add(mockReq, mockRes);
      
      // assert
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Preço não foi preenchido'
      });
    });

    it('não deve salvar um produto sem nome', async () => {
      const mockReq = {
        body: {
          price: 5000,
        }
      };
      
      mockRes = {
        status: jest.fn(),
        json: jest.fn(),
      }
      
      // acão
      await ProductsController.add(mockReq, mockRes);
      
      // assert
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Nome não foi preenchido'
      });
    });
  });
});