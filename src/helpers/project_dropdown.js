export let projectList = ['None', 'Work', 'School', 'Personal'];

export const projectDropdown = () => {
	const dropdown = document.createElement('select');
	dropdown.id = 'project-dropdown';
	dropdown.name = 'project-dropdown';
	dropdown.classList = 'project-dropdown';
	projectList.forEach((project) => {
		const option = document.createElement('option');
		option.value = project;
		option.textContent = project;
		dropdown.appendChild(option);
	});

	const newProjectOption = document.createElement('option');
	newProjectOption.value = 'add-new-project';
	newProjectOption.textContent = 'Add New Project';
	dropdown.appendChild(newProjectOption);

	return document.body.appendChild(dropdown);
};

projectDropdown();

const dropdownValue = document.getElementById('project-dropdown');
const projectInput = {};

dropdownValue.addEventListener('change', (e) => {
	if (e.target.value === 'add-new-project') {
		const newProjectName = prompt('Enter new project name');
		projectList.push(newProjectName);
		//console.log({ projectList });
		projectInput.value = newProjectName;
		console.log(projectInput.value);

		const newOption = document.createElement('option');
		newOption.value = newProjectName;
		newOption.textContent = newProjectName;
		dropdownValue.appendChild(newOption);
		dropdownValue.value = newProjectName;
	} else {
		projectInput.value = e.target.value;
		console.log(projectInput.value);
	}
});
