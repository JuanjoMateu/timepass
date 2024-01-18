const horaMiddleware = (req, res, next) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formatedTime = `${hours}:${minutes}:${seconds}`;
    req.time = formatedTime;
    console.log(req.time);
    next();
};

module.exports = horaMiddleware;
