'use strict';
var commentController = require('./controllers/commentController');
var flightController = require('./controllers/flightController');

module.exports = (app)=>{
    app.route('/comments/:flightId')
        .get(commentController.getComments);

    app.route('/comments')
        .post(commentController.createComment);
    
    app.route('/flights')
        .get(flightController.getFlights)
        .post(flightController.createFlight);
}