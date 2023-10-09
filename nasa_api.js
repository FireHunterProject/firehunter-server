const axios = require('axios');

const FIRMS_NASA_API_KEY = "dcc13d016abdad7d2e393b4ec36ddd40";
const BRASIL_URL = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/' + FIRMS_NASA_API_KEY + '/MODIS_NRT/BRA/1'

async function requestNasaData() {
    const response = await axios.get(
        BRASIL_URL
    );

    const csv = response.data;
    const result = parseCSV(csv);
    return result;
}

function parseCSV(csvString) {
    // Dividir o CSV em linhas
    const lines = csvString.split('\n');

    // Obter os nomes das colunas a partir da primeira linha
    const columns = lines[0].split(',');

    // Inicializar um array para armazenar os objetos
    const result = [];

    // Iterar pelas linhas do CSV (começando da segunda linha, pois a primeira contém os cabeçalhos)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const values = line.split(',');

        // Inicializar um objeto para armazenar os dados desta linha
        const obj = {};

        // Iterar pelos valores e atribuí-los às colunas correspondentes
        for (let j = 0; j < columns.length; j++) {
            const columnName = columns[j];
            const value = values[j];
            obj[columnName] = value;
        }

        obj['source'] = 'nasa';

        // Adicionar o objeto ao array de resultado
        result.push(obj);
    }

    return result;
}


module.exports = { requestNasaData };