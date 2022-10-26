import { makeEl } from "./index.js"
import pic from './img/IMG_5049.jpg'

export default function about() {
    const container = makeEl("container");
    const titleContainer = makeEl();
    const title = makeEl("title", "div", "Barry's");
    const subtitle = makeEl('sub-title', "div", 
 "Italian Restaurant\nSince 2022");
    const barry = new Image();
    barry.classList.add("barry-pic");
    barry.src = pic;
    titleContainer.append(title, subtitle);
    container.appendChild(titleContainer);
    container.appendChild(barry);
    const copy = makeEl("copy");
    copy.innerText = "People say a baby can't run a restaurant\nWell, they've never been to Barry's";
    container.appendChild(copy);
    


    return container;
}