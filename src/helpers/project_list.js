import { todoList } from '../add_todo_popup/todo_dialog_form';

// make an array of projects in the todoList array

const projectList = [];

if (todoList.length > 0) {
	projectList = todoList.map((todo) => todo.getProject());
}
if (todoList.length === 0) {
	projectList = ['No Projects'];
}

export { projectList };
