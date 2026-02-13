const User = require("../model/auth.model.js");
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");

// Register

exports.register = async (req, res) => {
  try{
    const {name, mobile, email, password} = req.body;

    if(!name || !mobile || !email || !password){
      return res.status(400).json({message: "all fildes are required"})
    } 
    const userExist = await User.findOne({email});
    if (userExist) {
      return res.status(400).json({message: "User already exists"});
    }

        //  Hash Password in controller

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const savedUser = await User.create({name, mobile, email, password:hashedPassword});
    res.status(201).json (savedUser);

  } catch (err){
    res.status(500).json(err);

  }
};

// Read all

exports.login = async (req, res) =>  {
const {email, password} = req.body;
if (!email || !password) {
  return res.status(400).json({message: "All fields are required"});
}

const user = await User.findOne({email});
if (!user) {
  return res.status(400).json({message: "User does not exist"});
}

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  return res.status(400).json({message: "Invalid credentials"});
}

const token = jwt.sign({id: user._id}, "secretkey", {expiresIn: "1h"});


  res.json({message: "Login successful", token:token});
};