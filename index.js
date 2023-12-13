import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app= express();
// Serve static files from the 'public' directory
app.use(express.static(__dirname));

// Define a route for the root URL that serves the index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

app.listen(5000,() =>{
    console.log("fileName:",__filename);
    console.log("Server Started 5000");
});