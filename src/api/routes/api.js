const express = require('express');
const router = express.Router();
const { upload }= require("../helpers/commonHelper")

// VerifyToken
const verify = require('../middleware/verifyToken');

// App Controller
const authController = require("../controllers/authController");
const testController = require("../controllers/test");
const blogController  =require("../controllers/blogs");
const contactUsController = require('../controllers/contact_us');
const serviceController = require('../controllers/service');
const productController = require('../controllers/product');
const productImageController = require('../controllers/product_image');
const productFeatureController = require('../controllers/product_features');
const cartController = require('../controllers/cart');
const userController = require('../controllers/user');
const BannerController = require('../controllers/banners');
const poojaController = require('../controllers/pooja');
const price_tierController = require('../controllers/price_tier');
const pooja_categoryController = require('../controllers/poojaCategory');
const orderController = require('../controllers/order');
const search = require("../controllers/search");
const enquiry_form = require("../controllers/enquiry_form");

// Validators
const userValidator = require('../validations/usersValidation');

// auth api
router.get('/auth',verify,(req,res) =>{
    res.json({message: "okay"})
})

// Test_API
router.get("/test",testController.get_test);
router.post("/test",testController.store_test);

// AUTH_api
router.post("/login",authController.login);
router.post('/register',userValidator.registerValidation,authController.register);
router.post('/refresh-token',userValidator.refreshTokenValidation,authController.refreshToken);

// Blog_Api
router.get('/blogs',blogController.get_blogs);
router.get("/blogs/:id",blogController.get_blogs_by_id);
router.post("/blogs",upload.single("blogs_image"),blogController.store_blogs);
router.put("/blogs/:id",blogController.update_blogs);
router.delete("/blogs/:id",blogController.delete_blogs);

// Contact_us 
router.get('/contact_us',contactUsController.get_contact_us);
router.get('/contact_us/:id',contactUsController.get_contact_us_id);
router.post('/contact_us',contactUsController.store_contact_us);
router.put('/contact_us/:id',contactUsController.update_contact_us);
router.delete('/contact_us/:id',contactUsController.delete_contact_us);

// Enquiry_ Form
router.get('/enquiry_form',enquiry_form.get_enquiry_form);
router.get('/enquiry_form/:id',enquiry_form.get_enquiry_form_id);
router.post('/enquiry_form',enquiry_form.store_enquiry_form);
router.put('/enquiry_form/:id',enquiry_form.update_enquiry_form);
router.delete('/enquiry_form/:id',enquiry_form.delete_enquiry_form)

// Service_api
router.get('/service',serviceController.get_service);
router.get('/service/:id',serviceController.get_service_id);
router.post('/service',serviceController.store_service);
router.put('/service/:id',serviceController.update_service)
router.delete('/service/:id',serviceController.delete_service);

// Product_API
router.get('/product',productController.get_product);
router.get('/product/:id',productController.get_product_id);
router.get('/product/category/:subcategory_id',productController.get_product_by_category_id);
router.post('/product',upload.single("main_image"),productController.store_product);
router.put('/product/:id',upload.single("main_image"),productController.update_product);
router.delete('/product/:id',productController.delete_product);

// product_image_api
router.get('/product_image',productImageController.get_product);
router.get('/product_image/:id',productImageController.get_product_by_id);
router.get('/product_image/images/:product_id',productImageController.get_product_image_by_product_id);
router.post('/product_image',upload.single("image_url"),productImageController.store_product_image)
router.put('/product_image/:id',upload.single("image_url"),productImageController.update_product);
router.delete('/product_image/:id',productImageController.delete_product_image);

// product_features_api
router.get('/product_features',productFeatureController.get_product_features);
router.get('/product_features/:id',productFeatureController.get_product_features_by_id)
router.get('/product/:product_id',productFeatureController.get_product_features_by_product_id);
router.post('/product_features',productFeatureController.store_product_feature);
router.put('/product_feature/:id',productFeatureController.update_product_feature);
router.delete('/product_feature/:product_id',productFeatureController.delete_product_features);

// cart_api
router.get('/cart',cartController.get_cart);
router.get('/cart/:id',verify,cartController.get_cart_by_id);
router.get('/cart_by_user_id/:userId',verify,cartController.get_by_cart_user_id);
router.get('/cart/total/:userId' ,cartController.get_total_product_of_user);
router.post('/cart',cartController.store_cart);
router.put('/cart/:id',cartController.update_cart);
router.delete('cart/:id',cartController.delete_cart);

// usercontroller
router.get("/user", userController.get_user_list);
router.get("/user/:id", userController.get_user);
router.get("/user/email/:email",userController.get_user_by_email);
router.delete("/user/:id",userController.delete_user);

// BannerController
router.get('/banner',BannerController.get_banner);
router.get('/banner/:id',BannerController.get_banner_by_id);
router.get('/banner/banner_category/:banner_category',BannerController.get_banner_by_banner_category);
router.post('/banner',upload.single("banner_image"),BannerController.store_banner)
router.put('/banner/:id',upload.single("banner_image"),BannerController.update_banner);
router.delete('/banner/:id',BannerController.delete_banner);

// PoojaController
router.get('/pooja',poojaController.get_pooja);
router.get('/pooja/:id',poojaController.get_pooja_by_id);
router.get('/pooja/category/:category_id',poojaController.get_pooja_by_category_id);
router.post('/pooja',upload.single('image'),poojaController.store_pooja);
router.put('/pooja/:id',upload.single('image'),poojaController.update_pooja);
router.delete('/pooja/:id',poojaController.delete_pooja);

// PoojaCategoryController 
router.get('/pooja_category',pooja_categoryController.get_pooja_category);
router.get('/pooja_category/:id',pooja_categoryController.get_pooja_category_by_id);
router.post('/pooja_category',pooja_categoryController.store_pooja_category);
router.put('/pooja_category/:id',pooja_categoryController.update_pooja_category)
router.delete('/pooja_category/:id',pooja_categoryController.delete_pooja_category);

// Price_tierController
router.get('/price_tier',price_tierController.get_price_tier);
router.get('/price_tier/:id',price_tierController.get_price_tier_by_id);
router.post('/price_tier',price_tierController.store_price_tier);
router.put('/price_tier/:id',price_tierController.update_price_tier);
router.put('/price_tier/update_price/:id',price_tierController.update_price);
router.delete('/price_tier/:id',price_tierController.delete_price_tier);

// Order
router.post('/order',orderController.store_offline);
router.get('/order',orderController.getOrder);

// Serch 
router.get('/search',search.search_products)

module.exports = router;