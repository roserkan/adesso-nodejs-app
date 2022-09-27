const BaseService = require("./BaseService");
const userDetailModel = require("../models/userDetail");
const userModel = require("../models/user");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { userDetailMessages, globalMessages } = require("../constants/messages");
const { isValidObjectId } = require("mongoose");

class userDetailService extends BaseService {
  constructor() {
    super(userDetailModel);
  }
  //* Override to create method
  async create(data, message) {
    const error = Rules(
      await this.isThereUserToAdd(data.userId)
    );
    if (error) return error;

    return successResult(await userDetailModel(data).save(), message);
  }

  async update(id, data, message) {
    const error = Rules(
      await this.isThereUserToAdd(data.userId)
    );
    if (error) return error;

    const result = await this.BaseModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (result === null) return errorResult(message);
    return successResult(result, globalMessages.updated);
  }

  /* Business Rules */

  async isThereUserToAdd(user) {
    if (!isValidObjectId(user))
      return errorResult(globalMessages.invalidObjectId);

    const result = await userModel?.findOne({ _id: user });
    if (!result) {
      return errorResult(userDetailMessages.notFound);
    }
    return successResult();
  }
}

module.exports = new userDetailService();
