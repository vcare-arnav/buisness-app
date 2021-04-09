const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const subcategoriesSchema = mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        index: true,      
        },
        
        img: {
            data: Buffer,
            contentType: String 
        },

        
        products_list: {
            type: [ mongoose.SchemaTypes.ObjectId ],
            ref: 'Products',
            required: true,
        }
    },
    {
        timestamps: true
    }
);

// add plugin that converts mongoose to json
subcategoriesSchema.plugin(toJSON);
subcategoriesSchema.plugin(paginate);

/**
 * @typedef Subcategories
 */
 const Subcategories = mongoose.model('Subategories', subcategoriesSchema);

 module.exports = Subcategories;
//  const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

// const subcategoriesSchema = mongoose.Schema(
//     { 
//         title: {
//           type: String,
//           required: true,
//           index: true,
          
//         },

//         products_list: {
//             type: [ mongoose.SchemaTypes.ObjectId ],
//             ref: 'Products',
//             required: true,
//         },
//         imgcategories: {
//             data: Buffer,
//             contentType: String 
//         },

        
//     },
//     {
//         timestamps: true
//     }
// );

// // add plugin that converts mongoose to json
// categoriesSchema.plugin(toJSON);
// categoriesSchema.plugin(paginate);

// /**
//  * @typedef Categories
//  */
//  const Subcategories = mongoose.model('Subategories', subcategoriesSchema);

//  module.exports = Subcategories;

