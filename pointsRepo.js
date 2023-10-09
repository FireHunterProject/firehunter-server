

const fs = require('fs');

const nomeArquivo = './bd/points.json';

async function save(point) {
  let objetosExistente = [];

  try {
    // Tentar ler o conteúdo atual do arquivo, se existir
    const arquivoConteudo = fs.readFileSync(nomeArquivo, 'utf8');
    objetosExistente = JSON.parse(arquivoConteudo);
  } catch (erro) {
    throw 'falha ao salvar' + erro;
    // Se o arquivo não existir ou ocorrer um erro na leitura, continuaremos com um array vazio
  }

  objetosExistente.push(point); // Adiciona o novo objeto ao array existente

  try {
    // Escreve o array atualizado de objetos de volta no arquivo
    fs.writeFileSync(nomeArquivo, JSON.stringify(objetosExistente, null, 2));
    console.log(`Objeto adicionado com sucesso ao arquivo ${nomeArquivo}`);
  } catch (erro) {
    console.error(`Erro ao adicionar o objeto ao arquivo ${nomeArquivo}: ${erro}`);
  }
}

async function getPoints() {
  try {
    const arquivoConteudo = fs.readFileSync(nomeArquivo, 'utf8');
    const objeto = JSON.parse(arquivoConteudo);
    return objeto;
  } catch (erro) {
    console.error(`Erro ao ler o arquivo ${nomeArquivo}: ${erro}`);
    return null;
  }
}

async function saveAll(points) {
  let objetosExistente = [];

  try {
    // Tentar ler o conteúdo atual do arquivo, se existir
    const arquivoConteudo = fs.readFileSync(nomeArquivo, 'utf8');
    objetosExistente = JSON.parse(arquivoConteudo);
  } catch (erro) {
    throw 'falha ao salvar' + erro;
    // Se o arquivo não existir ou ocorrer um erro na leitura, continuaremos com um array vazio
  }

  objetosExistente = objetosExistente.concat(points); // Concatena o novo array ao array existente

  try {
    // Escreve o array atualizado de objetos de volta no arquivo
    fs.writeFileSync(nomeArquivo, JSON.stringify(objetosExistente, null, 2));
    console.log(`Array de objetos adicionado com sucesso ao arquivo ${nomeArquivo}`);
  } catch (erro) {
    console.error(`Erro ao adicionar o array de objetos ao arquivo ${nomeArquivo}: ${erro}`);
  }
}

async function updateNasaPoints(points) {
  let objetosExistente = [];

  try {
    const arquivoConteudo = fs.readFileSync(nomeArquivo, 'utf8');
    objetosExistente = JSON.parse(arquivoConteudo);
  } catch (erro) {
    // throw 'falha ao salvar' + erro;
  }

  const objetosFiltrados = objetosExistente.filter(objeto => objeto.source !== 'nasa');

  objetosExistente = objetosFiltrados.concat(points);

  try {
    fs.writeFileSync(nomeArquivo, JSON.stringify(objetosExistente, null, 2));
    console.log(`Array de objetos adicionado com sucesso ao arquivo ${nomeArquivo}`);
  } catch (erro) {
    console.error(`Erro ao adicionar o array de objetos ao arquivo ${nomeArquivo}: ${erro}`);
  }
}


module.exports = {
    save, saveAll, getPoints, updateNasaPoints
}