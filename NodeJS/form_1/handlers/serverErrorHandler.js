const serverSideErrorHandler = (res, statusCode = 500, msg = 'sorry something went wrong', type = 'aplication/json') => {
    res.writeHead(statusCode, { 'content-type': type });
    res.end(JSON.stringify({ msg: msg }));
    return;
}

module.exports = serverSideErrorHandler;