module.exports = function(app, controller) {
	'use strict';

	// api ---------------------------------------------------------------------
	// get a single todo
	app.get('/api/todos/:todo_id', controller.get);

	// get all todos
	app.get('/api/todos', controller.list);

	// create todo and send back all todos after creation
	app.post('/api/todos', controller.create, controller.list);

	// delete a todo
	app.delete('/api/todos/:todo_id', controller.delete, controller.list);

	// get a single todo
	app.get('/api/search/:text', controller.search);
	
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
