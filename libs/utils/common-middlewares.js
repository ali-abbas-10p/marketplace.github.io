exports.authorizationMiddleWare = function (redirect) {
    return function (req,res,next) {
        if(req.header('Authorization'))
            req.authorization = req.header('Authorization');
        else if(req.session.authorization)
            req.authorization = req.session.authorization;
        else {
            if(redirect)
                res.redirect('/login');
            else
                res.status(401).json({code:401,msg:"unauthorized"});
            res.end();
            return;
        }

        next();
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