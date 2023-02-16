import { TodoObject } from '../todo_object';
import redrawTodoList from '../redrawTodoList';
import {
	titleInput,
	descriptionInput,
	dueDateInput,
	priorityInput,
	projectInput,
	statusInput,
	todoList,
	form,
} from './todo_dialog_form';
import { addTodoButton } from './addTodoButton';

export const submitNewTodo = document.createElement('button');
submitNewTodo.textContent = 'Submit Todo';
submitNewTodo.id = 'Submit-Todo';
submitNewTodo.classList = 'Submit-Todo';
submitNewTodo.type = 'submit';
submitNewTodo.name = 'submit';
submitNewTodo.addEventListener('click', (e) => {
	e.preventDefault();
	let jerry = new TodoObject(
		titleInput.value,
		descriptionInput.value,
		dueDateInput.value,
		priorityInput.value,
		projectInput.value,
		statusInput.value
	);
	addTodoButton.style.display = 'block';
	modal.style.display = 'none';
	todoList.push(jerry);
	modal.close();
	form.reset();
	redrawTodoList();
});
