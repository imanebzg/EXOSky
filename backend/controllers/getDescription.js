const axios = require('axios');

// Controller to fetch all exoplanets' RA and Dec from NASA API
const getDescription = async (req, res) => {

    try {
        
        const nasaApiUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=';
        // Query for RA, Dec, and sy_dist (distance)
        const response = await axios.get(`${nasaApiUrl}select+ra,dec,sy_dist+from+ps+where+sy_dist<=9.2&format=json`);

        // Map to extract only RA and Dec attributes
        const exoplanets = response.data.map(planet => ({
            ra: planet.ra,
            dec: planet.dec
        }));

        // Return the filtered exoplanets

        res.status(200).json(exoplanets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exoplanets from NASA API', error });
    }
};

module.exports = { getExoplanetsInRadius };
