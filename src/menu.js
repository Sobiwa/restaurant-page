import { makeEl } from "./index.js"
import pic from './img/IMG_5825.jpg'
import pancakes from "./img/pancakes.jpg"

export default function menu() {
    const container = makeEl("container");

    const item1 = makeEl("full-item");
    const title = makeEl("menu-title", "div", "Meatballs");
    const subtitle = makeEl('menu-sub-title', "div", 
 "Chef Barry's famous home-style meatballs");
    const meatballBarry = makePic(pic);
    item1.append(title, subtitle, meatballBarry);

    const item2 = makeEl("full-item");
    const title2 = makeEl("menu-title", "div", "Pancakes");
    const subtitle2 = makeEl("menu-sub-title", "div",
    "Mini-pancakes, maple veggie sausage, and roasted sweet potatoes");
    const pancakeBarry = makePic(pancakes);
    item2.append(title2, subtitle2, pancakeBarry);


    
    container.append(item1, item2);


    


    return container;
}

function makePic(source) {
    const pic = new Image();
    pic.classList.add("menu-pic");
    pic.src = source;
    return pic;
}
