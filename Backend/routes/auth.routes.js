const express = require("express")
const router = express.Router()
const authcontroler = require("../controler/auth.controler");


router.post("/register", authcontroler.register);
router.post("/login", authcontroler.login);

module.exports=router;

