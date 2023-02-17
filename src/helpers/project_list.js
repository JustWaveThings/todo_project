import { todoList } from '../add_todo_popup/todo_dialog_form';

// make an array of projects in the todoList array

let projectList = ['Sample Project'];

function redrawProjectListDropdown() {
	if (projectList.length > 1) {
		projectList.slice(indexOf('Sample Project'), 1);
		projectList = todoList.map((todo) => todo.getProject());
		console.log(projectList);
	}
	return projectList;
}

export { redrawProjectListDropdown };
