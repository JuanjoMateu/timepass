const express = require('express');
const app = express();
const index = require('./routes/index');
const horaMiddleware = require('./middlewares/horaMiddleware')
const validarHora = require('./middlewares/validarHora')
const endroute = require('./routes/endroute')

app.use(horaMiddleware);
app.use('/', index);

app.use(validarHora);
app.use('/endroute', endroute);

app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto 3000');
});

