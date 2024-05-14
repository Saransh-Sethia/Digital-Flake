const authService = require("../services/authService");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authService.registerUser(userData);
    console.log("user", user);
    res.status(201).json({
      message: "User Registered Successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async(req,res) => {
    try{
        const userData = req.body;

        const {token, userId} = await authService.loginUser(userData);

        res.status(200).json({
            message: "User Logged In Successfully",
            token,
            userId
        })

    } catch(error){
        res.status(500).json({message:error.message})
    }
};

const forgotPassword = async(req,res) => {
  const {email} = req.body;
  User.findOne({email: email})
  .then(user => {
      if(!user) {
          return res.send({Status: "User not existed"})
      } 
      const token = jwt.sign({id: user._id},process.env.JWT_SECRET)
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'youremail@gmail.com',
            pass: 'your password'
          }
        });
        
        var mailOptions = {
          from: 'youremail@gmail.com',
          to: 'user email@gmail.com',
          subject: 'Reset Password Link',
          text: `http://localhost:5000/reset_password/${user._id}/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            return res.send({Status: "Success"})
          }
        });
  })
}

const someData = async(req,res) => {
    res.send('Hurray you just accessed the private endpoint')
    }

module.exports = { register, login, someData, forgotPassword };
