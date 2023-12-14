const mongoose = require('mongoose')
const Product = mongoose.model('Product' , {
    title : {type:String},
    price:{type:Number},
    category:{type:String},
    description: { type: String},
    image:{ type:String }

})
module.exports = Product;