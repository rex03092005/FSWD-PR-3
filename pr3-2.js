const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Data not found');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);  // Send the index.html data
                res.end();
            }
        });
    }
  
    else if (req.url === '/images/img1.jpg') {
        const imagePath = path.join(__dirname, 'images', 'img1.jpg');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Image Not Found');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
                res.end(data);
            }
        });
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});