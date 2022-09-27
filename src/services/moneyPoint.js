const BaseService = require("./BaseService");
const moneyPointModel = require("../models/moneyPoint");

class moneyPointService extends BaseService {
  constructor() {
    super(moneyPointModel);
  }
}

module.exports = new moneyPointService();
