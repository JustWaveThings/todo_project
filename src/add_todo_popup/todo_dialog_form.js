import { TodoObject } from '../todo_object';
import redrawTodoList from '../redrawTodoList';

// not sure this goes here, but it will be here for now...
export const todoList = [];

//this is the form that will be displayed in the modal, to create a new todo

const container = document.getElementById('content');
export const todoDialog = document.createElement('dialog');
todoDialog.id = 'modal';
container.appendChild(todoDialog);

const parent = document.getElementById('modal');
console.log({ parent });
const title = document.createElement('title');
title.textContent = 'Add Todo';
title.style.color = 'blue';
title.style.display = 'block';
title.id = 'todo-title';
parent.appendChild(title);

const form = document.createElement('form');
form.id = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
form.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title-input';
titleInput.name = 'title';
titleInput.required = true;
titleLabel.appendChild(titleInput);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
form.appendChild(descriptionLabel);

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description-input';
descriptionInput.name = 'description';
descriptionInput.required = true;
descriptionLabel.appendChild(descriptionInput);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
form.appendChild(dueDateLabel);

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.id = 'due-date-input';
dueDateInput.name = 'due-date';
dueDateInput.required = false;
dueDateLabel.appendChild(dueDateInput);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
form.appendChild(priorityLabel);

const priorityInput = document.createElement('input');
priorityInput.defaultValue = 'Low';
priorityInput.type = 'text';
priorityInput.id = 'priority-input';
priorityInput.name = 'priority';
priorityInput.required = false;
priorityLabel.appendChild(priorityInput);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
form.appendChild(projectLabel);

const projectInput = document.createElement('input');
projectInput.defaultValue = 'Not Assigned';
projectInput.type = 'text';
projectInput.id = 'project-input';
projectInput.name = 'project';
projectInput.required = false;
projectLabel.appendChild(projectInput);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
form.appendChild(statusLabel);

const statusInput = document.createElement('input');
statusInput.type = 'text';
statusInput.id = 'status-input';
statusInput.name = 'status';
statusInput.required = false;
statusLabel.appendChild(statusInput);

const submitNewTodo = document.createElement('button');
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
	todoList.push(jerry);
	modal.close();
	form.reset();
	redrawTodoList();
});

form.appendChild(submitNewTodo);

const cancelNewTodo = document.createElement('button');
cancelNewTodo.textContent = 'Cancel';
cancelNewTodo.id = 'Cancel-Todo';
cancelNewTodo.classList = 'Cancel-Todo';
cancelNewTodo.type = 'reset';
cancelNewTodo.name = 'cancel';
cancelNewTodo.addEventListener('click', (e) => {
	modal.close();
});

form.appendChild(cancelNewTodo);
