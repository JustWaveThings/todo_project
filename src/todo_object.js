import { v4 as uuidv4 } from 'uuid';

export class TodoObject {
	constructor(
		title,
		description,
		dueDate,
		priority,
		project,
		status
	) {
		this.title = title || 'default title';
		this.description = description || 'default description';
		this.dueDate = dueDate || 'default due date';
		this.priority = priority || 'default priority';
		this.project = project || 'default project';
		this.status = status || 'default status';
		this.id = uuidv4();
	}

	getTitle() {
		return this.title;
	}

	getDescription() {
		return this.description;
	}

	getDueDate() {
		return this.dueDate;
	}

	getPriority() {
		return this.priority;
	}

	getProject() {
		return this.project;
	}

	getStatus() {
		return this.status;
	}

	getId() {
		return this.id;
	}

	setTitle(title) {
		this.title = title;
	}

	setDescription(description) {
		this.description = description;
	}

	setDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	setPriority(priority) {
		this.priority = priority;
	}

	setProject(project) {
		this.project = project;
	}

	setStatus(status) {
		this.status = status;
	}
}
