'use strict'
describe("routes", function() {
	var routes = require("../../app/routes.js");
	var app = {
		get : function(path, callback) {},
		post : function(path, callback) {},	
		delete : function(path, callback) {}
	};

	it("should register API path's", function() {
		spyOn(app, 'get');
		spyOn(app, 'post');
		spyOn(app, 'delete');

		routes(app);

		expect(app.get).toHaveBeenCalledWith('/api/todos', jasmine.any(Function));
		expect(app.get).toHaveBeenCalledWith('*', jasmine.any(Function));
		expect(app.post).toHaveBeenCalledWith('/api/todos', jasmine.any(Function));
		expect(app.delete).toHaveBeenCalledWith('/api/todos/:todo_id', jasmine.any(Function));
	});
});
