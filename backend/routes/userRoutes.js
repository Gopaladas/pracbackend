const express = require('express');
const router = express.Router();
const {RegisterHandler,LoginUser,getMe} = require('../controllers/userHandlers');
const {protect} = require('../middleware/authMiddleware')

router.post('/',RegisterHandler);

router.post('/login',LoginUser);

router.get('/me',protect,getMe);

module.exports = router