import "./style.css";
import about from "./about.js";
import menu from "./menu.js";
import contact from "./contact.js";

function makeEl(className, type = "div", text = '') {
    const element = document.createElement(type);
    element.classList.add(className);
    element.innerText = text;
    return element;
}

const header = makeEl("header");
const tabContainer = makeEl("tab-container", "ul")
const homeTab = makeEl("tab", "li", "Home");
const menuTab = makeEl("tab", "li", "Menu");
const contactTab = makeEl("tab", "li", "Contact");
const content = makeEl("content");

tabContainer.append(homeTab, menuTab, contactTab);
header.append(tabContainer);

content.appendChild(about());

homeTab.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    content.appendChild(about());
})

menuTab.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(menu());
})

contactTab.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(contact());
})


document.body.appendChild(header);
document.body.appendChild(content);

export { makeEl }