const express = require('express');
const router = express.Router();
const {RegisterHandler,LoginUser} = require('../controllers/userHandlers');


router.post('/',RegisterHandler);

router.post('/login',LoginUser);

module.exports = router