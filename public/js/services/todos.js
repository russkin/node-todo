angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function(id) {
				return $http.get('/api/todos/' + id);
			},
			search: function(text) {
				return $http.get('/api/search/' + text);
			},
			list : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		};
	}]);
