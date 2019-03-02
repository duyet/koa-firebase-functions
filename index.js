module.exports = function(app) {
	if (!app) throw Error('Must be valid Koa app instance')
	return app.listen()._events.request
}

