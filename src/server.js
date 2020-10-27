// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express()


server
    //utilizar body do req
    .use(express.urlencoded({extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar template engine - para ter dados no html (variáveis, estruturas de repetição...)
    .set('views', path.join(__dirname, "views")) //buscar arquivos da view
    .set('view engine', 'hbs') //engine instalada

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)
