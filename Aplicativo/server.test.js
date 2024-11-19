const path = require('path');  // Módulo path para lidar com caminhos de arquivos
const fs = require('fs');  // Módulo fs para interagir com o sistema de arquivos

// Teste para verificar se o arquivo 'index.html' existe
test('main index.html file exists', () => {
  // Cria o caminho completo para o arquivo index.html
  const filePath = path.join(__dirname, "index.html");
  // Verifica se o arquivo existe e passa no teste se for verdadeiro
  expect(fs.existsSync(filePath)).toBeTruthy();
});

// Teste para verificar se o arquivo 'Dockerfile' existe
test('Dockerfile exists', () => {
  // Cria o caminho completo para o arquivo Dockerfile
  const filePath = path.join(__dirname, "..", "Dockerfile");
  // Verifica se o arquivo existe e passa no teste se for verdadeiro
  expect(fs.existsSync(filePath)).toBeTruthy();
});

// Teste para verificar se o arquivo '.gitignore' existe
test('.gitignore file exists', () => {
  // Cria o caminho completo para o arquivo .gitignore
  const filePath = path.join(__dirname, "..", ".gitignore");
  // Verifica se o arquivo existe e passa no teste se for verdadeiro
  expect(fs.existsSync(filePath)).toBeTruthy();
});
