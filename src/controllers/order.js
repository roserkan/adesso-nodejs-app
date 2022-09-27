const OrderService = require("../services/order");

class OrderController {
  async create(req, res) {
    const result = await OrderService.create(req.body);
    res.status(result.statusCode).json(result);
  }
}

module.exports = new OrderController();
