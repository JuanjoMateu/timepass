const express = require('express');
const endroute = express.Router();

endroute.get('/endroute', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>Ruta Final</h1>
        </header>
        <section>
            <p>¡Bienvenido a la ruta final! </p>
        </section>
    </body>
    </html>`);
});

module.exports = endroute;
