import { todoList } from '../add_todo_popup/todo_dialog_form';

// make an array of projects in the todoList array

let projectList = ['Sample Project'];

function redrawProjectListDropdown() {
	projectList = todoList.map((todo) => todo.getProject());
	return projectList;
}

export { redrawProjectListDropdown, projectList };
