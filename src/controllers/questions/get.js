const get = ({ Question }, { config }) => (req, res, next) => {
	const { _id } = req.params; //get route param in code
	try {
		const questions = await Question.findOne({ _id }); //find question by id
		res.status(200).send({ questions }); //send response
	} catch (error) {
		next(error); //send erro next for error handler
	}
};

module.exports= { get };
