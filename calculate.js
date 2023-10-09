function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Average radius of the Earth in kilometers
  
    // Convert degrees to radians
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;
  
    // Difference in latitudes and longitudes
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
  
    // Haversine formula
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    // Distance in kilometers
    const distance = earthRadius * c;
  
    return distance;
  }
  
  // Function to filter objects within a 15 km radius
  function findObjectsInRadius(latInitial, lonInitial, points, radius) {
    const radiusKm = radius;
    return points.filter(point => {
      const distance = calculateDistance(
        latInitial,
        lonInitial,
        point.latitude,
        point.longitude
      );
      return distance <= radiusKm;
    });
  }

module.exports = { findObjectsInRadius };