const BaseService = require("./BaseService");
const CategoryPointRateModel = require("../models/categoryPointRate");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { categoryMessages, globalMessages } = require("../constants/messages");

class CategoryService extends BaseService {
  constructor() {
    super(CategoryPointRateModel);
  }

  async update(data, message) {
    const rate = await CategoryPointRateModel.findOne({categoryId: data.categoryId});

    const result = await this.BaseModel.findByIdAndUpdate(rate._id, data, {
      new: true,
    });
    if (result === null) return errorResult(message);

    return successResult(result, globalMessages.updated);
  }
}

module.exports = new CategoryService();
