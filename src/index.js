import './style.css';
import { TodoObject } from './todo_object';
import { todoView } from './todo_view';
//import { openNewTodo, closeNewTodo } from './add_todo_popup/new_todo';

const todo = new TodoObject(
	'Go shopping',
	"Buy milk, bread, and ho-ho's",
	'2022-12-24',
	'High',
	'Personal',
	'Incomplete'
);

(function () {
	todoView(
		todo.getTitle(),
		todo.getDescription(),
		todo.getDueDate(),
		todo.getPriority(),
		todo.getProject(),
		todo.getStatus(),
		todo.getId(),
		'content',
		'div'
	);
})();
