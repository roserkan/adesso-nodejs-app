const BaseService = require("./BaseService");
const roleModel = require("../models/role");
const Rules = require("../utils/businessRules");
const { errorResult, successResult } = require("../utils/result");
const { roleMessages, globalMessages } = require("../constants/messages");

class roleService extends BaseService {
  constructor() {
    super(roleModel);
  }
  //* Override to create method
  async create(data, message) {
    const error = Rules(await this.hasRoleNameBeenAddedBefore(data.roleName));
    if (error) return error;

    return successResult(await roleModel(data).save(), message);
  }

  async update(id, data, message) {
    const error = Rules(await this.hasRoleNameBeenAddedBefore(data.roleName));
    if (error) return error;

    const result = await this.BaseModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (result === null) return errorResult(message);
    return successResult(result, globalMessages.updated);
  }

  /* Business Rules */

  async hasRoleNameBeenAddedBefore(roleName) {
    const result = await roleModel?.findOne({ roleName: roleName });
    if (result) {
      return errorResult(roleMessages.roleNameAlreadyExist);
    }
    return successResult();
  }
}

module.exports = new roleService();
