const { errorResult } = require("./result");


function BusinessRules() {

    for (const logic of arguments) {
        if(!logic.success){
            return  logic
        }     
    }

    return null

}

module.exports = BusinessRules