import { addTodoButton } from './addTodoButton';
import cancelIcon from '../icons/cancel.svg';

export const cancelNewTodo = document.createElement('button');
cancelNewTodo.id = 'Cancel-Todo';
cancelNewTodo.classList = 'Cancel-Todo';
cancelNewTodo.type = 'reset';
cancelNewTodo.name = 'cancel';
cancelNewTodo.addEventListener('click', (e) => {
	modal.close();
	modal.style.display = 'none';
	addTodoButton.style.display = 'block';
});

const icon = document.createElement('img');
icon.classList = 'cancel-icon';
icon.src = cancelIcon;
icon.alt = 'Cancel Adding Todo';
cancelNewTodo.appendChild(icon);
