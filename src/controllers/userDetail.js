const userDetailService = require("../services/userDetail");
const { userDetailMessages, globalMessages } = require("../constants/messages");

class userDetailController {
  async getAll(req, res) {
    const result = await userDetailService.list();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res) {
    const result = await userDetailService.findOne({_id: req.params.id}, userDetailMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async getByUserId(req, res) {
    const result = await userDetailService.findOne({userId: req.params.id});
    res.status(result.statusCode).json(result);
  }

  async create(req, res) {
    const result = await userDetailService.create(req.body, globalMessages.added);
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await userDetailService.update(req.params.id, req.body, userDetailMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async delete(req, res) {
    const result = await userDetailService.delete(req.params.id, userDetailMessages.notFound);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new userDetailController();
