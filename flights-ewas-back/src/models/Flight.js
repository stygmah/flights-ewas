'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Flight',
    new Schema({
        flightId: 
        {
            type: Number,
            required: true,
            unique: true
        }
    })
);