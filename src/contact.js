import { makeEl } from "./index.js"
import contactImg from "./img/contact.jpg"

export default function about() {
    const container = makeEl("container");
    const bAndB = new Image();
    bAndB.src = contactImg;
    bAndB.classList.add("contact-pic");
    const message = makeEl("message", "div", 
    "Hey Buster, that's private!");

    container.append(bAndB, message);

    return container;
}