import './style.css';
import addTodoButton from './add_todo_popup/addTodoButton';
import { todoList } from './add_todo_popup/todo_dialog_form';
import { redrawProjectListDropdown } from './helpers/project_list';
import {
	projectDropdown,
	dropdownValue,
} from './helpers/project_dropdown';

dropdownValue.addEventListener('change', () => {
	console.log(projectList);
});

// working between project_list.js and project_dropdown.js and todoList to get the list of projects from the TodoObject
