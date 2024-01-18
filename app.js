const express = require('express');
const app = express();
const index = require('./routes/index');
const horaMiddleware = require('./middlewares/horaMiddleware')

app.use('/', index, horaMiddleware);



app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto 3000');
});

