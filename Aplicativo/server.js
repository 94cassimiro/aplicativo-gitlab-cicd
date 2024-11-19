// Importação de módulos
const express = require('express');
const path = require('path');

// Inicialização do aplicativo Express
const app = express();

// Configuração para servir arquivos estáticos (CSS, JS, imagens, etc.) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para servir o arquivo index.html
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    
    // Verifica se o arquivo existe antes de enviá-lo
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar index.html:', err);
            res.status(500).send('Erro interno do servidor');
        }
    });
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
