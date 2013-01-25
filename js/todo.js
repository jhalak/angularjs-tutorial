function toDoController($scope) {
	$scope.todos = [
	  {title: "Learn angular JS", done: false},
	  {title: "Create TODO app with NG", done: false}
	];
	
	$scope.getTodoCount = function() {
		return $scope.todos.length;
	}
	
	$scope.addTodo = function() {
		$scope.todos.push({title:$scope.formTodoTextfield, done:false});
		$scope.formTodoTextfield = '';
	}
	
	$scope.removeCompleted = function() {
		$scope.todos = $scope.todos.filter(function(todo) {
			return !todo.done;
		});
	}
}