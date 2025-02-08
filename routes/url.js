const express = require('express');
const { generateshorturl,time } = require('../controllers/url');

const router = express.Router();

router.post('/', generateshorturl);

router.get('/time/:ShortId',time)



module.exports = router; 
