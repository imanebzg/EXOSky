const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT' , 'DELETE'], // Allow specified HTTP methods
};
app.use(cors(corsOptions));
const publicDirectory = path.join(__dirname, '/public'); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(publicDirectory));
//const getAuthRoutes = require('./routes/auth');
const getAllExoplanets = require('./routes/exoplanetData');
// defining routes
//app.use('/auth', getAuthRoutes);
app.use('/allExoplanets', getAllExoplanets);

app.listen(port, (err) => {
  if (err) console.log(`Error listening on port ${port}`);
  else  console.log(`Running on port ${port}`);
});