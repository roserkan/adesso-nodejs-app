const CategoryPointRateService = require("../services/categoryPointRate");
const { categoryMessages, globalMessages } = require("../constants/messages");

class CategoryController {
  async getRateByCategoryId(req, res) {
    const result = await CategoryPointRateService.findOne({categoryId: req.params.id});
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await CategoryPointRateService.update(
      req.body,
      categoryMessages.notFound
    );
    res.status(result.statusCode).json(result);
  }
}

module.exports = new CategoryController();
