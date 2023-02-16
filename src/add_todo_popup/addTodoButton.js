import { todoDialog } from './todo_dialog_form';

const placeTodoButton = document.body;

export const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Add Todo';
addTodoButton.id = 'add-todo-button';
addTodoButton.classList = 'add-todo-button';

addTodoButton.addEventListener('click', () => {
	modal.style.display = 'flex';
	modal.style.justifyContent = 'center';
	addTodoButton.style.display = 'none';
	todoDialog.showModal();
});
placeTodoButton.appendChild(addTodoButton);
