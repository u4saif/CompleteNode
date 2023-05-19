const Errorhandler = (err, req, res, next)=>{

//MongoDb Error
    if(err.code == 11000){
        err.status = 405;
        err.message = 'Dublicate username';
    }
    
    res.status(err.status || 500)
    res.send({
        errors: {
            error: err.message || 'Server Error',
            status: err.status || 500
        }
    });
}

module.exports = { Errorhandler }