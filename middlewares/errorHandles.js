function LogErrors(err, req, res, next) {
    console.log(err)
    next()
}

function ErrorHandler (err, req, res, next) {
    res.status(500).json({
        message: err.message,
    })
}

module.exports = {
    LogErrors,
    ErrorHandler
}