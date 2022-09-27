const BaseService = require("./BaseService");
const productModel = require("../models/product");
const categoryModel = require("../models/category");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { productMessages, globalMessages } = require("../constants/messages");
const { isValidObjectId } = require("mongoose");

class productService extends BaseService {
  constructor() {
    super(productModel);
  }
  //* Override to create method
  async create(data, message) {
    const error = Rules(
      await this.hasProductNameBeenAddedBefore(data.name),
      await this.isThereCategoryToAdd(data.categoryId)
    );
    if (error) return error;

    return successResult(await productModel(data).save(), message);
  }

  async update(id, data, message) {
    const error = Rules(
      await this.hasProductNameBeenAddedBefore(data.name),
      await this.isThereCategoryToAdd(data.categoryId)
    );
    if (error) return error;

    const result = await this.BaseModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (result === null) return errorResult(message);
    return successResult(result, globalMessages.updated);
  }

  /* Business Rules */

  async hasProductNameBeenAddedBefore(productName) {
    const result = await productModel?.findOne({ name: productName });
    if (result) {
      return errorResult(productMessages.productNameAlreadyExist);
    }
    return successResult();
  }

  async isThereCategoryToAdd(category) {
    if (!isValidObjectId(category))
      return errorResult(globalMessages.invalidObjectId);

    const result = await categoryModel?.findOne({ _id: category });
    if (!result) {
      return errorResult(productMessages.categoryNotFound);
    }
    return successResult();
  }
}

module.exports = new productService();
