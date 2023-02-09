// the todo object made with a class

export class TodoObject {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
	logObjectToConsole() {
		console.log(
			'title: ',
			this.title,
			'description: ',
			this.description,
			'due date: ',
			this.dueDate,
			'priority: ',
			this.priority
		);
	}
}

const test = new TodoObject(
	'make todo',
	'i want to make a todo app',
	'yesterday',
	'super-duper important'
);

test.logObjectToConsole();
