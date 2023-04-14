const http = require('http');
const { readFile, writeFile } = require('fs');
const { join } = require('path');
const serverSideErrorHandler = require('./handlers/serverErrorHandler');
const clientSideErrorHandler = require('./handlers/clientErrorHandler');
const PORT = 5000;
const hostName = "127.0.0.8";

let responseData = readFile(join(__dirname, 'students.json'), 'utf-8', (err, data) => {
    if (data) {
        console.log(JSON.parse(data));
        return JSON.parse(data);
    } else {

    }
})

const app = http.createServer((req, res) => {
    const { method, url } = req;
    console.log(method, url)
    if (method === "POST" && url === "/student") {
        req.on('data', (data) => {
            const student = JSON.parse(data.toString());
            console.log(student);
            if (!student.username) {
                clientSideErrorHandler(res, "username required")
            } else if (!student.email) {
                clientSideErrorHandler(res, "email required")
            } else if (!student.phone) {
                clientSideErrorHandler(res, "phone required")
            } else if (!student.countryCode) {
                clientSideErrorHandler(res, "select country code")
            } else {
                readFile(join(__dirname, 'students.json'), "utf-8", (err, data) => {
                    if (data) {
                        const students = JSON.parse(data);
                        if (!students.some((stud) => stud.username === student.username)) {
                            students.push(student);
                            writeFile(join(__dirname, "students.json"), JSON.stringify(students), 'utf-8', (err) => {
                                if (err) {
                                    serverSideErrorHandler(res);
                                } else {
                                    res.writeHead(200, { "content-type": "application/json" })
                                    res.end(JSON.stringify({ msg: "data stored in DB" }));
                                }
                            })

                        } else {
                            res.writeHead(400, { "content-type": "application/json" })
                            res.end(JSON.stringify({ msg: "username already taken use other username" }))
                        }
                    } else {
                        serverSideErrorHandler(res);
                    }
                })
            }
        })
        return;
    }
    if (method === "GET" && url === "/css/index.css") {
        readFile(join(__dirname, "public", 'css', 'index.css'), 'utf-8', (err, data) => {
            if (data) {
                res.writeHead(200, { "content-type": "text/css" })
                res.end(data);
            }
        })

    }
    else if (method === "GET" && url === "/") {
        readFile(join(__dirname, 'public', 'pages', 'home.html'), 'utf-8', (err, data) => {
            if (err) {
                serverSideErrorHandler(res, 503, `<h1>Some thing went wrong</h1>`, "text/html")
            } else {
                res.writeHead(200, { "content-type": "text/html" })
                res.write(data);
                res.end(JSON.stringify(responseData));
            }
        })
    }
    else if (method === 'GET' && url === '/signup') {
        readFile(join(__dirname, 'public', 'pages', 'signup.html'), 'utf-8', (err, data) => {
            if (err) {
                serverSideErrorHandler(res, 503, `<h1>Some thing went wrong</h1>`, "text/html")
            } else {
                res.writeHead(200, { "content-type": "text/html" })
                res.write(data);
                res.end();
            }
        })
    }
    else {
        readFile(join(__dirname, 'public', 'pages', 'pagenotfound.html'), 'utf-8', (err, data) => {
            res.writeHead(404, { "content-type": "text/html" })
            res.end(data);
        })
    }
})

app.listen(PORT, hostName, () => {
    console.log(`Server start with http://${hostName}:${PORT}`);
})