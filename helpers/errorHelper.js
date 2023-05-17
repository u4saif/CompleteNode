const Errorhandler = (err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        errors: {
            error: err.message || 'Server Error',
            status: err.status || 500
        }
    });
}

module.exports = { Errorhandler }