const horaMiddleware = (req, res, next) => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if(hours < 10) { hours = '0' + hours; }
    if(minutes < 10) { minutes = '0' + minutes; }
    if(seconds < 10) { seconds = '0' + seconds; } 

    const formatedTime = `${hours}:${minutes}:${seconds}`;
    req.time = formatedTime;
    console.log(req.time);
    next();
};

module.exports = horaMiddleware;
