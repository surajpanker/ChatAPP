//coding for backend app
const express= require('express');
const bodyParser = require('body-parser');//for 
const mongoose = require('mongoose');
//const config = require('./config.json');
const config = require('./config/keys');
require('./models/Registration');
require('./models/Demand');
require('./models/Cupon');
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.connect('mongodb+srv://root:root@cluster0-2cesk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());
require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);

