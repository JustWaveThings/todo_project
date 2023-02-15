import './style.css';
import { TodoObject } from './todo_object';
import { todoView } from './todo_view';
import addTodoButton from './add_todo_popup/add_todo_button';
import { todoList } from './add_todo_popup/todo_dialog_form';

// test object
const todo = new TodoObject(
	'Go shopping',
	"Buy milk, bread, and ho-ho's",
	'2022-12-24',
	'High',
	'Personal',
	'Incomplete'
);

todoList.push(todo);

function redrawTodoList() {
	const content = document.getElementById('content');

	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	todoList.forEach((todo) => {
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
	});
}

//redrawTodoList(); // this currently is what breaks the add todo button  // because modal is not defined
export default redrawTodoList;
