
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Comment',
    new Schema({
        comment:
        {
            type: String,
            required: true
        },
        userId: 
        {
            type: Number,
            required: true
        },
        flightId: 
        {
            type: Number,
            required: true
        },
        tags:
        {
            type: [String],
            default: []
        }
    },{ timestamps: { createdAt: 'created_at' } })
);