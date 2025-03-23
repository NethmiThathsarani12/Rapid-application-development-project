const express = require('express')
const userSignUpController = require('../controller/user/UserSignUp')
const userSignInController = require('../controller/user/UserSignIn')
const userDetailsController = require('../controller/user/userDetails')
const updateUser = require('../controller/user/updateUser')
const allUsers = require('../controller/user/allUser')
const getProductController = require('../controller/product/getProduct')
const UploadProductController = require('../controller/product/uploadProduct')
const updateProductController = require('../controller/product/updateProduct')
const userLogout = require("../controller/user/userLogout");
const authToken = require("../middleware/authToken");
const getCategoryProduct = require('../controller/product/getCategoryProduct')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const router = express.Router()




router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

router.post("/update-user",authToken,updateUser)
router.get("/all-user",authToken,allUsers)

router.get("/get-product",getProductController)
router.post("/upload-product",authToken,UploadProductController)
router.post("/update-product",authToken,updateProductController)

router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)



module.exports = router