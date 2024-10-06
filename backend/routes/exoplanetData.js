const express = require('express'); 
const router = express.Router();
const exoplanetController = require('../controllers/exoplanetController');
router.get('/allExoplanets', exoplanetController.getExoplanetsInRadius);
    
module.exports = router;