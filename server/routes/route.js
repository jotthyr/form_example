const express = require('express');
const routeController = require('../controllers/routeController');

const router = express.Router();

router.post('/form', routeController.postForm);

router.get('/test', routeController.testForm);

router.get('/test/:eventId', routeController.singleTestForm);

module.exports = router;
