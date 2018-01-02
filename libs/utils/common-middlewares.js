exports.authorizationMiddleWare = function (redirect) {
    return function (req,res,next) {
        var authorization;
        if(req.header('Authorization'))
            authorization = req.header('Authorization');
        else if(req.session.authorization)
            authorization = req.session.authorization;
        if(authorization)
        {
            req.authorization = authorization;
            next();
        }
        else {
            if(redirect)
                res.redirect('/login');
            else
                res.status(401).json({code:401,msg:"unauthorized"});
            res.end();
        }
    };
};

exports.checkIfAlreadyLoggedInMiddleWare = function (req,res,next) {
    if(req.session.authorization) {
        res.redirect('/home');
        res.end();
    }
    else
        next();
};