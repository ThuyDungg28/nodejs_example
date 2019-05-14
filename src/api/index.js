const express = require('express');

const { errorHandler } = require('../middleware');
//list of models here
const { Question } = require('../models/question');

//list of controllers here
const question = require('../controllers/questions');

//combine models into one object
const models = { Question };

const routersInit = config => {
	const route = express();

	//register api points
	route.use('/questions', questions(models, { config }));

	//catch api all errors
	router.use(errorHandler);
	return router;
};

module.exports = routersInit;

