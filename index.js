const { createServer } = require ('http');
const express = require ('express');

const dotenv = require ('dotenv');
const { error } = require('console');

dotenv.config();

let app = express();

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
    if(error){
        console.error('${error.name} : ${error.message}');
    }

    process.exit(error ? 1 : 0);
}))

app.get('/', (_, res) => res.send('<h1>Resposta</h1>'))

app.post("/" , function(req, res){
    const nome = req.body.nome;
    res.send('Olá ${nome}!');
})
http.listen(8989, () => console.log('Listening on * : 8989'));