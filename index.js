// importing express
const express = require('express');

// initializing express
const app = express();
const port = 5000;

// accept and process request
// route
app.get('/', (req, res) => {
    res.send('response from express')
});

app.get('/add', (req, res) => {
    res.send('response from add')
});

// getall
app.get('/getall', (req, res) => {
    res.send('response from getall')
});

//delete
app.get('/delete', (req, res) => {
    res.send('response from delete')
});

//update
app.get('/update', (req, res) => {
    res.send('response from update')
});

// start the server
app.listen( port, () => {
    console.log('server started');
});