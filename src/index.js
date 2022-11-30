/* import PubSub from 'pubsub-js'; */
import './style.css';
import container from './container';

export function component(
	text = 'sample',
	classname = '',
	appendTo = 'content',
	elem = 'div'
) {
	const element = document.createElement(elem);
	const toAppendto = document.getElementById(`${appendTo}`);
	element.className = classname;
	element.textContent = text;

	return toAppendto.appendChild(element);
}
