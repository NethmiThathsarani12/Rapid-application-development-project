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
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const addToCartViewProduct = require('../controller/user/addToCartViewProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
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
router.post("/product-details",getProductDetails)

router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
router.get("/search",searchProduct)

module.exports = router