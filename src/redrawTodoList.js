import { todoView } from './todo_view';
import { todoList } from './add_todo_popup/todo_dialog_form';

function redrawTodoList() {
	const todoContainer = document.querySelectorAll('.todo-container');

	for (let i = 0; i < todoContainer.length; i += 1) {
		const container = todoContainer[i];
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		container.remove();
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

export default redrawTodoList;
