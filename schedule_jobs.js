const nasaAPI = require('./nasa_api');
const db = require("./pointsRepo");

async function importNasaData() {
    const nasaData = await nasaAPI.requestNasaData();
    await db.updateNasaPoints(nasaData);
}

async function importEABData() {
    // Export from https://dataserver-coids.inpe.br/queimadas/queimadas/focos/csv/10min/
    // And save on DB
}