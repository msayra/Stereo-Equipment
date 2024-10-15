const mongoose = require('mongoose')

const productSchema = require('./product')
const brandSchema = require('./brand')

const Product = mongoose.model('Product', productSchema)
const Brand = mongoose.model('Brand', brandSchema)

module.exports = {
  Product,
  Brand
}