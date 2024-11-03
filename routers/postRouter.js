const express = require('express');
const Model = require('../models/postModel');

const router = express.Router();

router.post('/add', (req, res) => {

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;