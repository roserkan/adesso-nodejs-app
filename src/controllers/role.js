const roleService = require("../services/role");
const { roleMessages, globalMessages } = require("../constants/messages");

class roleController {
  async getAll(req, res) {
    const result = await roleService.list();
    res.status(result.statusCode).json(result);
  }

  async getById(req, res) {
    const result = await roleService.findOne({_id: req.params.id}, roleMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async create(req, res) {
    const result = await roleService.create(req.body, globalMessages.added);
    res.status(result.statusCode).json(result);
  }

  async update(req, res) {
    const result = await roleService.update(req.params.id, req.body, roleMessages.notFound);
    res.status(result.statusCode).json(result);
  }

  async delete(req, res) {
    const result = await roleService.delete(req.params.id, roleMessages.notFound);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new roleController();
