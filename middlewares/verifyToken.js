const jwt = require('jsonwebtoken')

const verifyToken =(req, res , next)=>{
    const token = req.header("token");
    console.log(token)
    if(!token){
        res.status(400).json({success:false , message:"Token not passed"})
    }
    try {
        const data = jwt.verify(token , "APP_TOKEN_VERIFY_*#^$&*#&(@&*@")
        req.user = data.user;
        next();
    } catch (error) {
        res.status(400).json({success:false , message:"Some Error occured while verifying the token"})
    }
}

module.exports = verifyToken;