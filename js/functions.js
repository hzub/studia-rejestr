function addElement(content, className, parent) {
  let element = document.createElement("div");
  element.innerHTML = content;
  element.className = className;
  if (parent) {
    parent.appendChild(element);
  }

  return element;
}

function clearElement(element) {
  element.innerHTML = "";
}
