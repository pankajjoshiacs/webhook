'use strict';

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var handler = require('../request_handler.js');

// /* GET users listing. */
router.get('/', (req, res) => {
	res.json({"status": 200});
	res.end();
});

/* GET users listing. */
router.get('/:project', (req, res) => {
	var body = req.body;
	handler.processRequest(body.events);
	res.json({"status": 200});
	res.end();
});

router.post('/:project', (req, res) => {
	handler.processRequest(req, res);
});

module.exports = router;