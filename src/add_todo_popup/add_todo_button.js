import * as todo_dialog from './todo_dialog_form';
const placeTodoButton = document.body;

export const addTodoButton = document.createElement('button');
addTodoButton.textContent = 'Add Todo';
addTodoButton.id = 'add-todo-button';
addTodoButton.classList = 'add-todo-button';
addTodoButton.addEventListener('click', (e) => {
	modal.showModal();
	console.log(e);
});
placeTodoButton.appendChild(addTodoButton);
