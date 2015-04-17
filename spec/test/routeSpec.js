describe("routes", function() {
	'use strict';

	var routes = require("../../app/routes.js");
	var app = {
		get : function(path, callback) {},
		post : function(path, callback) {},
		delete : function(path, callback) {}
	};

	var Todo = (function() {
		var todos = [];
			return {
				create : function(todo) {
					todos.push(todo);
				},
				delete : function(id) {
				},
				list : function(){
					return todos;
				}
		};
	})();


	it("should register API path's", function() {
		spyOn(app, 'get');
		spyOn(app, 'post');
		spyOn(app, 'delete');

		routes(app, Todo);

		expect(app.get).toHaveBeenCalledWith('/api/todos', Todo.list); 
		expect(app.get).toHaveBeenCalledWith('*', jasmine.any(Function));
		expect(app.post).toHaveBeenCalledWith('/api/todos', Todo.create, Todo.list);
		expect(app.delete).toHaveBeenCalledWith('/api/todos/:todo_id', Todo.delete, Todo.list);
	});

	describe("database stub", function() {
		it("should create todo", function() {

			routes(app, Todo);

			expect(Todo.list().length).toEqual(0);
			app.post('/api/todos/');
		});
	});
});
