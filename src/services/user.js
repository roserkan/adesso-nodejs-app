const BaseService = require("./BaseService");
const userModel = require("../models/user");
const moneyPointModel = require("../models/moneyPoint");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { userMessages, globalMessages } = require("../constants/messages");
const hash = require("../utils/hashing");
const { generateJwtToken } = require("../utils/jwt");

class userService extends BaseService {
  constructor() {
    super(userModel);
  }
  //* Override to create method
  async create(data, message) {
    const error = Rules(
      await this.hasEmailAddressBeenAddedBefore(data.emailAddress)
    );
    if (error) return error;

    data.password = await hash(data.password);
    const user = await userModel(data).save();
    await moneyPointModel({point: 0, userId: user._id}).save();
    return successResult(user, message);
  }

  async update(id, data, message) {
    const error = Rules(
      await this.hasEmailAddressBeenAddedBefore(data.emailAddress)
    );
    if (error) return error;

    if (data.password) {
      data.password = await hash(data.password);
    }

    const result = await this.BaseModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (result === null) return errorResult(message);
    return successResult(result, globalMessages.updated);
  }

  async login(data) {
    const user = await this.BaseModel.findOne(
      { emailAddress: data.emailAddress },
      ""
    );
    if (!user) return errorResult(userMessages.emailAddressNotFound);
    const hashedPassword = await hash(data.password);
    if (hashedPassword != user.password)
      return errorResult(userMessages.passwordError);
    const token = await generateJwtToken(
      user.id,
      user.emailAddress,
      user.userRoles
    );
    const userWithToken = {
      id: user._id,
      emailAddress: user.emailAddress,
      token: token
    }
    const result = {
      data: userWithToken,
      message: userMessages.loginSuccess,
      statusCode: 200,
      success: true,
    };
    return result;
  }

  /* Business Rules */

  async hasEmailAddressBeenAddedBefore(emailAddress) {
    const result = await userModel?.findOne({ emailAddress: emailAddress });
    if (result) {
      return errorResult(userMessages.emailAddressAlreadyExist);
    }
    return successResult();
  }
}

module.exports = new userService();
