import { cancelNewTodo } from './cancelNewTodo';
import { submitNewTodo } from './submitNewTodo';
// not sure this goes here, but it will be here for now...
export const todoList = [];

//this is the form that will be displayed in the modal, to create a new todo

const container = document.getElementById('content');
export const todoDialog = document.createElement('dialog');
todoDialog.id = 'modal';
container.appendChild(todoDialog);

const parent = document.getElementById('modal');
console.log({ parent });

export const form = document.createElement('form');
form.id = 'todo-form';
form.method = 'dialog';
parent.appendChild(form);

const title = document.createElement('title');
title.textContent = 'Add Todo';
title.style.display = 'block';
title.id = 'todo-title';
form.appendChild(title);

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Title';
titleLabel.id = 'title-label';
form.appendChild(titleLabel);

export const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title-input';
titleInput.name = 'title';
titleInput.required = true;
titleLabel.appendChild(titleInput);

const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description';
form.appendChild(descriptionLabel);

export const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description-input';
descriptionInput.name = 'description';
descriptionInput.required = true;
descriptionLabel.appendChild(descriptionInput);

const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due Date';
form.appendChild(dueDateLabel);

export const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.id = 'due-date-input';
dueDateInput.name = 'due-date';
dueDateInput.required = false;
dueDateLabel.appendChild(dueDateInput);

const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority';
form.appendChild(priorityLabel);

export const priorityInput = document.createElement('input');
priorityInput.defaultValue = 'Low';
priorityInput.type = 'text';
priorityInput.id = 'priority-input';
priorityInput.name = 'priority';
priorityInput.required = false;
priorityLabel.appendChild(priorityInput);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project';
form.appendChild(projectLabel);

export const projectInput = document.createElement('input');
projectInput.defaultValue = 'Not Assigned';
projectInput.type = 'text';
projectInput.id = 'project-input';
projectInput.name = 'project';
projectInput.required = false;
projectLabel.appendChild(projectInput);

const statusLabel = document.createElement('label');
statusLabel.textContent = 'Status';
form.appendChild(statusLabel);

export const statusInput = document.createElement('input');
statusInput.type = 'text';
statusInput.id = 'status-input';
statusInput.name = 'status';
statusInput.required = false;
statusLabel.appendChild(statusInput);

// buttons section for modal
form.appendChild(submitNewTodo);
form.appendChild(cancelNewTodo);
