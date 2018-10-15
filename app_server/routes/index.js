var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlCheckout = require('../controllers/checkout');
var ctrlAbout = require('../controllers/about');
var ctrlproducts = require('../controllers/products');
var ctrladdcart = require('../controllers/addtocart');
var ctrlshoppingcart = require('../controllers/shoppingCart');


/* GET home page. */
router.get('/',ctrlMain.index);
/* GET product page. */
router.get('/products',ctrlproducts.products);
/* GET about page. */
router.get('/about',ctrlAbout.about);
/* GET checkout page. */
router.get('/checkout',ctrlCheckout.checkout);
/* GET addtocart req. */
router.get('/add-to-cart/:id',ctrladdcart.cart);
/* GET addtocart req. */
router.get('/shopping-cart',ctrlshoppingcart.shoppingcart);



module.exports = router;