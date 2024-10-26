const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add response from user');
});

// getall
router.get('/getall', (req, res) => {
    res.send('get all response from user')
});

// getbyid
router.get('/getbyid', (req, res) => {
    res.send('get by id response from user')
});

//delete
router.get('/delete', (req, res) => {
    res.send('delete response from user')
});

//update
router.get('/update', (req, res) => {
    res.send('update response from user')
});

module.exports = router;