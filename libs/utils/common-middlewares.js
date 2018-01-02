exports.authorizationMiddleWare = function (redirect) {
    return function (req,res,next) {
        console.log(req.session.authorization);
        if(req.header('Authorization'))
            req.authorization = req.header('Authorization');
        else if(req.session.Authorization)
            req.authorization = req.session('Authorization');
        else {
            if(redirect)
                res.writeHead(302, {'Location': '/login'});
            else
                res.status(401).json({code:401,msg:"unauthorized"});
            res.end();
            return;
        }
        next();
    };
};