var Product = require('../models/product');
module.exports.index = function(req, res, next) {
    Product.find(function(err , docs){
      var ProductChunk = [];
      var chunkSize = 4;
      for(var i = 0; i < docs.length ; i+=chunkSize){
        ProductChunk.push(docs.slice(i, i+chunkSize));
      }
      res.render('shop/index', { title: 'Techifier Kart' , products: ProductChunk});
    }); 
  };

