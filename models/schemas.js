const productSchema = require('./product');
const mongoose = require('mongoose');

module.exports = {
    Products: mongoose.model('Product', productSchema)

}
