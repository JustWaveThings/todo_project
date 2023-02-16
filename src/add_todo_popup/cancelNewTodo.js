import { addTodoButton } from './addTodoButton';

export const cancelNewTodo = document.createElement('button');
cancelNewTodo.textContent = 'Cancel';
cancelNewTodo.id = 'Cancel-Todo';
cancelNewTodo.classList = 'Cancel-Todo';
cancelNewTodo.type = 'reset';
cancelNewTodo.name = 'cancel';
cancelNewTodo.addEventListener('click', (e) => {
	modal.close();
	modal.style.display = 'none';
	addTodoButton.style.display = 'block';
});
