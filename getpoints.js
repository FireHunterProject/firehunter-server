const db = require('./pointsRepo');
const processPoints = require('./calculate');

async function getPointsBasedOnLocation(lat, long) {
    const allPoints = await db.getPoints();
    const processedPoints = processPoints.findObjectsInRadius();
    return processedPoints;
}

module.exports = {
    getPointsBasedOnLocation,
}