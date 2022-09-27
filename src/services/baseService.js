const { successResult, errorResult } = require('../utils/result');
const { globalMessages } = require("../constants/messages");


BaseModel = null;

class BaseService {
    constructor(model) {
        this.BaseModel = model
    }
    async list(where, message) {
        return  successResult(await this.BaseModel?.find(where || {}), message);
    }
    async create(data) {
        return successResult(await new this.BaseModel(data).save(), globalMessages.added);
    }
    async findOne(where, message) {
        const result = await this.BaseModel.findOne(where);
        if(result === null)
            return errorResult(message);
        return successResult(result, globalMessages.added);


    }
    async update(id, data, message) {
        const result = await this.BaseModel.findByIdAndUpdate(id, data, { new : true });
        if(result === null)
            return errorResult(message);
        return successResult(result, globalMessages.updated);

    }
    async updateWhere(where, data) {
        return successResult(await this.BaseModel.findOneAndUpdate(where, data, { new : true }));
    }
    async delete(id, message) {
        const result = await this.BaseModel.findByIdAndDelete(id);
        if(result === null)
            return errorResult(message);
        return successResult(result, globalMessages.deleted);
    }
}

module.exports = BaseService;