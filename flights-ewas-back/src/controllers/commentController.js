var mongoose = require('mongoose');
var Comment = require('../models/Comment');

module.exports = {
    getComments: (req,res)=>{
        Comment.find({flightId: req.params.flightId})
        .sort( '-created_at' )
        .then(doc => res.send(doc))
        .catch(err=> res.send(err));
    },//sort chrono
    createComment: (req,res)=>{
        var comment = req.body;
        Comment.create(comment)
        .then(doc => res.status(201).send())
        .catch(err=> res.status(500).send(err));
    }
}