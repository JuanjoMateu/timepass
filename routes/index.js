const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
 
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Bienvenido</h1>
        </header>
        <section>
            <p>La hora actual es: ${req.time}</p>
            <button><a href="/endroute">Entrar</a></button>
        </section>
    </body>
    </html>`);
});


router.use((req, res) => {
    res.status(404).send(`<h1>Página no encontrada</h1><a href="/">Inicio</a>`)
})
module.exports = router