const http = require('http');
const { readFile } = require('fs');
const { join } = require('path');
const PORT = 5000;
const hostName = '127.0.0.8';

const app = http.createServer((req, res) => {
    const { method, url } = req;
    if (method === 'GET') {
        // console.log(url);
        switch (url) {
            case '/':
                readFile(join(__dirname, 'public', "pages", 'index.html'), "utf-8", (err, data) => {
                    if (err) {
                        res.write("<h1>Sorrry</h1>");
                        res.end();
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;

            case '/contact':
                readFile(join(__dirname, 'public', "pages", 'contact.html'), "utf-8", (err, data) => {
                    if (err) {
                        res.write("<h1>Sorrry</h1>");
                        res.end();
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;

            case '/about':
                readFile(join(__dirname, 'public', "pages", 'about.html'), "utf-8", (err, data) => {
                    if (err) {
                        res.write("<h1>Sorrry</h1>");
                        res.end();
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;

            case '/career':
                readFile(join(__dirname, 'public', "pages", 'career.html'), "utf-8", (err, data) => {
                    if (err) {
                        res.write("<h1>Sorrry</h1>");
                        res.end();
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;

            case '/goals':
                readFile(join(__dirname, 'public', "pages", 'goals.html'), "utf-8", (err, data) => {
                    if (err) {
                        res.write("<h1>Sorrry</h1>");
                        res.end();
                    } else {
                        res.write(data);
                        res.end();
                    }
                });
                break;

            default:
                res.write("<h1>invalid input</h1>");
                res.end();
        }
    }
});

app.listen(PORT, hostName, () => {
    console.log(`server started at http://${hostName}:${PORT}`);
})

// app.on("request", (req, res) => {
//     res.write("<h1>hello world</h1>");
//     res.end();
// })