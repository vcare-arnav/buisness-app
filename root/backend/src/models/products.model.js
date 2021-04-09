const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const productsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,

          },

        cost: {
            type:Number,
            required:true,

        },  
        imgproducts: {
            data: Buffer,
            contentType: String 
        },

        
    // location: {  - field or new scheema NOT CLear
    // },
    },
    {
        timestamps: true
    }

);

// add plugin that converts mongoose to json
productsSchema.plugin(toJSON);
productsSchema.plugin(paginate);

/**
 * @typedef Products
 */
 const Products = mongoose.model('Products', productsSchema);

 module.exports = Products;