const express = require('express');
const app = express();
const index = require('./routes/index');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const endroute = require('./routes/endroute');

app.use(endroute);
app.use(horaMiddleware);
app.use(validarHora);
app.use('/', index);


app.listen(3000, () => {
    console.log('El servidor esta escuchando en http://localhost:3000/');
});

