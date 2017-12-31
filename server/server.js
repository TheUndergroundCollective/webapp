const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const bodyParser = require('body-parser');
const request = require('request');
//loads in the environment variables from .env file
require('dotenv').config();
const baseShopifyURL = 'https://' + process.env.SHOPIFY_API_KEY + ':' + process.env.SHOPIFY_API_PASSWORD + '@ugc-futurewonder.myshopify.com/';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(path.join(__dirname, '../app')));
//API methods to interact with shopify data
//add a new product
app.post('/add_product', function (req, res) {
  var url = baseShopifyURL + '/admin/products.json';
  request.post(url, {form: req.body}, function(err, innerResponse, body) {
    console.log(req.cookies);
    //console.log(res);
    console.log(res.statusCode);
    res.send('add product request received');
  });
})

//get products
app.get('/get_products', function (req, res) {
  var url = baseShopifyURL + '/admin/products.json?limit=250';
  request.get(url,function(err, innerResponse, body){
    res.send(JSON.parse(body).products);
  });
})

app.delete('/delete_product', function(req, res) {
  console.log(req.query.id);
  var url = baseShopifyURL + '/admin/products/' + req.query.id + '.json';
  request.delete(url, function(err, innerResponse, body){
    console.log(res.statusCode);
    res.send();
  });
})


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server running on http://0.0.0.0:%s/.', port);
  console.log(path.join(__dirname, '../app'));
});
