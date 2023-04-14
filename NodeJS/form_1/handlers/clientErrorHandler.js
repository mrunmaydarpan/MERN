const clientErrorHandler = (res, msg = "invalid request") => {
    res.writeHead(400, { 'content-type': 'aplication/json' });
    res.end(JSON.stringify(msg));
}

module.exports = clientErrorHandler;