const Database = require('sqlite-async');

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//Pedir para abrir um arquivo no _dirname (diretório local) = database
//utiliza o then pois qualquer função precisará esperar que database.open esteja completo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
//module é um objeto que tem o método exports que pega o resultado e joga pra "fora"
//resultado é o 'db'

//para testar o arquivo digite no terminal: node src/database.db.js