const BaseService = require("./BaseService");
const OrderModel = require("../models/order");
const ProductService = require("../services/product");
const CategoryService = require("../services/categoryPointRate");
const MoneyPointService = require("../services/moneyPoint");

const { successResult, errorResult } = require("../utils/result");

class OrderService extends BaseService {
  constructor() {
    super(OrderModel);
  }

  async create(data, message = null) {
    const dataModel = {
      userId: data.userId,
      total: data.total,
      orderItems: data.createOrderItemDtos
    }
    const order = await OrderModel(dataModel).save();
    await this.calculateMoneyPoint(dataModel)

    return successResult(order, "Sipariş ekleme başarılı");
  }


  async calculateMoneyPoint(dataModel) {
    const point = dataModel.total * (0.10);
    const moneyPoint = await MoneyPointService.findOne({userId: dataModel.userId});
    await MoneyPointService.update(moneyPoint.data._id, {point: point});
    // let x = 0;
    // items.forEach(async item => {
    //   const product = await ProductService.findOne({_id: item.productId});
    //   const categoryId = product.data.categoryId;
    //   const rate = await CategoryService.findOne({categoryId: categoryId});
    //   const total = item.quantity * product.data.price;
    //   console.log(total)
    //   x += total;
    // });

    // console.log(x)
  }
}

module.exports = new OrderService();
