const httpStatus = require("http-status");
const { errorResult } = require("../utils/result");

const idChecker = (field) => (req, res, next) => {
    // const idField = field || "id";

    if(!req?.params[field || "id"]?.match(/^[0-9a-fA-F]{24}$/)){
        next(errorResult("Lütfen geçerli bi ID bilgisi giriniz!", httpStatus.BAD_REQUEST))
        return;
    }
    next();
};

module.exports = idChecker;