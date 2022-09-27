const CategoryService = require("../services/category");
const { categoryMessages, globalMessages } = require("../constants/messages");

class CategoryController {
  async getAll(req, res) {
    const result = await CategoryService.list();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res) {
    const result = await CategoryService.findOne({_id: req.params.id}, categoryMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async create(req, res) {
    const result = await CategoryService.create(req.body, globalMessages.added);
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await CategoryService.update(req.params.id, req.body, categoryMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async delete(req, res) {
    const result = await CategoryService.delete(req.params.id, categoryMessages.notFound);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new CategoryController();
