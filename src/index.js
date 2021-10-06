const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Settings       ----------------------------------------
app.set('port', process.env.PORT || 3000);

//middlewares    ----------------------------------------
app.use( morgan('dev') );
app.use( cors() );
app.use( express.urlencoded({extended: false}) );
app.use( express.json() );

//ROUTES         ----------------------------------------
app.use( require('./routes/index') );

//Start Server   ----------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('Server online');
});