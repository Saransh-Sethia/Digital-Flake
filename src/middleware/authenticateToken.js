const jwt = require("jsonwebtoken");

const authenticateToken = (req,res,next) => {
    console.log("Inside the Middleware");
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    console.log("Inside the Middleware token",token)

    if(token == null)
        return res.sendStatus(401) //unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err)
           return res.sendStatus(403) //forbidden

        req.user = user;
        next();
    })
};

module.exports = authenticateToken;