export function testView(
	text = 'this is the test view from testComponent.js',
	classname = 'test',
	appendTo = 'content',
	elem = 'div'
) {
	const element = document.createElement(elem);
	const toAppendto = document.getElementById(`${appendTo}`);
	element.className = classname;
	element.textContent = text;

	return toAppendto.appendChild(element);
}
