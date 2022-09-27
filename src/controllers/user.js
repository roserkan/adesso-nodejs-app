const userService = require("../services/user");
const { userMessages, globalMessages } = require("../constants/messages");

class userController {
  async getAll(req, res) {
    const result = await userService.list();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res) {
    const result = await userService.findOne({_id: req.params.id}, userMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async create(req, res) {
    const result = await userService.create(req.body, globalMessages.added);
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await userService.update(req.params.id, req.body, userMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async delete(req, res) {
    const result = await userService.delete(req.params.id, userMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async login(req, res) {
    const result = await userService.login(req.body);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new userController();
