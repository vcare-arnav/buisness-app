const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const advertisementSchema = mongoose.Schema(
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

    // location: {  - field or new scheema NOT CLear
    // },    
    
        url:{ 
            type:String,
            required:true
    
        },
        
    },
    {
        timestamps: true
    }

);

// add plugin that converts mongoose to json
advertisementSchema.plugin(toJSON);
advertisementSchema.plugin(paginate);

/**
 * @typedef Advertisement
 */
 const Advertisement = mongoose.model('Advertisement', advertisementSchema);

 module.exports = Advertisement;