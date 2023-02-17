const ErrorHander = require("..//utils/errorhander");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong MongoDB ID err
    if (err.name === "CastError") {
        const message = `Resource not Found Invalid:${err.path}`;
        err = new ErrorHander(message, 400);
    }

    // mongoode  duplicate key err 

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHander(message, 400)
    }

    // Wrong JWT error 
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is Invalid ,try again`;
        err = new ErrorHander(message, 400);
    }

    // JWT expire error 

    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired ,try again`;
        err = new ErrorHander(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });

};