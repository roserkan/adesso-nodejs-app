const moneyPointService = require("../services/moneyPoint");

class moneyPointController {

  async getByUserId(req, res) {
    const result = await moneyPointService.findOne({userId: req.params.id});
    res.status(result.statusCode).json(result);
  }
}

module.exports = new moneyPointController();
