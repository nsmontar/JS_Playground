const http = require("http");
const fs = require("fs")
const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Contenty-Type": "text/html" })
    fs.readFile("index.html", function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write("Error: File Not Fuond");
        } else {
            res.write(data)
        }
        res.end();
    })


});

server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});