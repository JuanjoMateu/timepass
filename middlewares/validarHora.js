const express = require('express');
const horaMiddleware = require('./horaMiddleware');

const validarHora = express.Router();

validarHora.use(horaMiddleware);
validarHora.get('/endroute', (req, res, next) => {
    const currentTime = new Date();
    const horaActual = currentTime.getHours();

    const horaLimite = 11

    if (horaActual < horaLimite) {
        res.locals.mensaje = `Aún no son las ${horaLimite} de la mañana para poder entrar`
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
});

module.exports = validarHora;