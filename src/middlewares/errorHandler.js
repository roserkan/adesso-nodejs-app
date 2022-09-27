module.exports = (error, req, res, next) => {
    if(error){
        res.status(error.status || 500);
        res.json({
            error : {
                message : error.message || "Internal Server Error !",
            },
        });
    }else{
        res.status(httpStatus.OK).json("aga");
    }
   
};