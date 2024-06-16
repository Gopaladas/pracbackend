const express = require('express');
const router = express.Router();
const {RegisterHandler} = require('../controllers/userHandlers');


router.post('/',RegisterHandler)

// router.get('/login',);

module.exports = router