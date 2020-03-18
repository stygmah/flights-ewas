var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes');

app = express();
port = process.env.PORT || 3000;
mongoURI = 'mongodb://admin:'+process.argv[2]+'@ds163162.mlab.com:63162/flight-ewas-prueba';//password must be set as first argument

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true }, (err)=>{
    if(err) throw err;
}); 



//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


//Set routes
routes(app);


//listen
app.listen(port, ()=>{
    console.log('port listening on port '+port)
});