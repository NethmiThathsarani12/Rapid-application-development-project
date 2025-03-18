const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/UserSignUp")
const userSignInController = require('../controller/UserSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)



module.exports = router