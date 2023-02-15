import './style.css';
import { TodoObject } from './todo_object';
import { todoView } from './todo_view';
import addTodoButton from './add_todo_popup/add_todo_button';
import todoDialog from './add_todo_popup/todo_dialog_form';

// test object
const todo = new TodoObject(
	'Go shopping',
	"Buy milk, bread, and ho-ho's",
	'2022-12-24',
	'High',
	'Personal',
	'Incomplete'
);

// displays the todo instance of the TodoObject class
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
