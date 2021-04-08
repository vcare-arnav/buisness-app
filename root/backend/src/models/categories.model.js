const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const categoriesSchema = mongoose.Schema(
    { 
        title: {
          type: String,
          required: true,
          index: true,
          
        },

        subcategories_list: {
            type: [ mongoose.SchemaTypes.ObjectId ],
            ref: 'Subcategories',
            required: true,
        },
        img: {
            data: Buffer,
            contentType: String 
        },

        
    //    Not Clear Vendor or admin 
    //     user_list: {
    //         type: [ mongoose.SchemaTypes.ObjectId ],
    //         ref: 'User',
    //         required: true,
    //   },
        },
    {
        timestamps: true
    }
);

// add plugin that converts mongoose to json
categoriesSchema.plugin(toJSON);
categoriesSchema.plugin(paginate);

/**
 * @typedef Categories
 */
 const Categories = mongoose.model('Categories', categoriesSchema);

 module.exports = Categories;

