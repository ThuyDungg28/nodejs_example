module.exports = (models, { config }) => {
	const api = router();

	api.get('/', list(models, { config }));
	api.get('/:_id', get(models, { config }));

	return api;
};
