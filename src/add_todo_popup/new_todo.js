const addTodoButton = document.createElement('button');
addTodoButton.id = 'add-todo-button';
addTodoButton.textContent = 'Add Todo';
document.getElementById('content').appendChild(addTodoButton);

// create new todo form

const newTodoForm = document.createElement('div');
newTodoForm.id = 'new-todo-form';
newTodoForm.className = 'modal';
document.getElementById('content').appendChild(newTodoForm);

addTodoButton.addEventListener('click', openNewTodo);

function openNewTodo() {
	document.getElementById('new-todo-form').style.display = 'block';
	console.log('openNewTodo() called');
}

function closeNewTodo() {
	document.getElementById('new-todo-form').style.display = 'none';
	console.log('closeNewTodo() called');
}

// close when click outside the form

window.onclick = function (event) {
	let modal = document.getElementById('new-todo-form');
	if (event.target !== modal) {
		closeNewTodo();
		console.log('clicked outside the form...');
	}
};

export { openNewTodo, closeNewTodo };
