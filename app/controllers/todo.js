module.exports = function(Todo) {
	'use strict';

	// if there is an error retrieving, send the error. nothing after res.send(err) will execute
	var onError =  function(err, res) {
			if (err)
				res.send(err);
	};

	// get a single todo
	var get = function(req, res) {
		Todo.find({
			_id : req.params.todo_id
		}, function(err, todo) {
			onError(err, res);
			res.json(todo);
		});
	};

	// use mongoose to get all todos in the database
	var list = function(req, res) {
		Todo.find(function(err, todos) {
			onError(err, todos);
			res.json(todos); // return all todos in JSON format
		});
	};

	// create a todo, information comes from AJAX request from Angular
	var create = function(req, res, next) {
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, res) {
			onError(err, res);
			next();
		});
	};

	// delete a todo
	var del = function(req, res, next) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, res) {
			onError(err, res);
			next();
		});
	};
	

	// search todoes by name
	var search = function(req, res) {
		Todo.find({
			text : new RegExp(req.params.text, 'i')
		}, function(err, todo) {
			onError(err, res);
			res.json(todo);
		});
	};

	return {
		get		: get,
		list	: list,
		create	: create,
		delete	: del,
		search	: search
	};
};
