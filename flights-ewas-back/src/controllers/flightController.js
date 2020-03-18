var mongoose = require('mongoose');
var Flight = require('../models/Flight');

module.exports = {
    getFlight: (req,res)=>{
        Flight.find({flightId: req.params.flightId})
        .then(doc => res.send(doc))
        .catch(err=> res.send(err));
    },
    getFlights: (req,res)=>{
        Flight.find()
        .then(doc => res.send(doc))
        .catch(err=> res.send(err));
    },
    createFlight: (req,res)=>{
        var flight = req.body;
        Flight.create(flight)
        .then(doc => res.status(201).send())
        .catch(err=> res.status(500).send(err));
    }
}