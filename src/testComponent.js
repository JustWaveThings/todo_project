export function component(
  text = "sample 2d3",
  classname = "test",
  appendTo = "content",
  elem = "div"
) {
  const element = document.createElement(elem);
  const toAppendto = document.getElementById(`${appendTo}`);
  element.className = classname;
  element.textContent = text;

  return toAppendto.appendChild(element);
}
