const express = require('express');
const routeController = require('../controllers/routeController');

const router = express.Router();

router.post('/form', routeController.postForm);

module.exports = router;
