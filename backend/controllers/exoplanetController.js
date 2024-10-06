const axios = require('axios');

// Controller to fetch all exoplanets' RA and Dec from NASA API
const getExoplanetsInRadius = async (req, res) => {

    try {
        const nasaApiUrl = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=';
        // Query for RA, Dec, and sy_dist (distance)
        const response = await axios.get(`${nasaApiUrl}select+ra,dec,sy_dist,pl_name+from+ps+where+sy_dist<=15&format=json`);

        // Map to extract only RA and Dec attributes
        const exoplanets = response.data.map(planet => ({
            ra: planet.ra,
            dec: planet.dec,
            pl_name: planet.pl_name,
            sy_dist: planet.sy_dist
        }));

        // Return the filtered exoplanets

        res.status(200).json(exoplanets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exoplanets from NASA API', error });
    }
};

module.exports = { getExoplanetsInRadius };
