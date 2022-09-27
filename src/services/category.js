const BaseService = require("./BaseService");
const CategoryModel = require("../models/category");
const CategoryPointRateModel = require("../models/categoryPointRate");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { categoryMessages, globalMessages } = require("../constants/messages");

class CategoryService extends BaseService {
  constructor() {
    super(CategoryModel);
  }
  //* Override to create method
  async create(data, message) {
    const error = Rules(await this.hasCategoryBeenAddedBefore(data.name));
    if (error) return error;

    const category = await CategoryModel(data).save();
    await CategoryPointRateModel({categoryId: category._id, pointRate: 0}).save();
    

    return successResult(category, message);
  }


  async update(id, data, message) {
    const error = Rules(await this.hasCategoryBeenAddedBefore(data.name));
    if (error) return error;

    const result = await this.BaseModel.findByIdAndUpdate(id, data, { new : true });
    if(result === null)
        return errorResult(message);

    

    
    return successResult(result, globalMessages.updated);

}

  async hasCategoryBeenAddedBefore(categoryName) {
    const result = await CategoryModel?.findOne({ name: categoryName });
    if (result) {
      //! neden middleware'e düşmüyor
      return errorResult(categoryMessages.categoryNameAlreadyExist);
    }
    return successResult();
  }
}

module.exports = new CategoryService();
