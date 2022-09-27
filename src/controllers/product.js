const productService = require("../services/product");
const { productMessages, globalMessages } = require("../constants/messages");

class productController {
  async getAll(req, res) {
    const result = await productService.list();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res) {
    const result = await productService.findOne({_id: req.params.id}, productMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async getByCategoryId(req, res) {
    const result = await productService.list({categoryId: req.params.id});
    res.status(result.statusCode).json(result);
  }

  async create(req, res) {
    const result = await productService.create(req.body, globalMessages.added);
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await productService.update(req.params.id, req.body, productMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async delete(req, res) {
    const result = await productService.delete(req.params.id, productMessages.notFound);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new productController();
