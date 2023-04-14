const http = require('http');
const app = http.createServer();
const PORT = 4080;

app.on('request', (req, res) => {
    res.write('<h1>Hello</h1>');
    res.end();
});

app.listen(PORT, () => {
    console.log("server started with port=" + PORT);
});