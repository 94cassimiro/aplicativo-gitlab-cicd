# Usando uma imagem oficial do Node.js
FROM node:20-alpine

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos do projeto para dentro do contêiner
COPY . .

# Instalar as dependências
RUN npm install

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]
