import { todoDialog } from './todo_dialog_form';
const placeTodoButton = document.body;

export const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Add Todo';
addTodoButton.id = 'add-todo-button';
addTodoButton.classList = 'add-todo-button';
console.log(
	'check for "todoDialog" with document.contains method',
	document.contains(todoDialog)
);
addTodoButton.addEventListener('click', () => {
	console.log(
		'check for "todoDialog" with document.contains method',
		document.contains(todoDialog)
	);
	todoDialog.showModal();
});
placeTodoButton.appendChild(addTodoButton);
