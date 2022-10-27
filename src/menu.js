import { makeEl } from "./index.js"
import pic from './img/IMG_5825.jpg'
import pancakes from "./img/pancakes.jpg"
import wafer from "./img/wafers.jpg"
import pastina from "./img/pastina.jpg"
import pickle from "./img/pickle.jpg"
import marinara from "./img/marinara.jpg"

export default function menu() {
    const container = makeEl("container");

    const brunch = makeEl("mealTime", "div", "Brunch")
    const dinner = makeEl("mealTime", "div", "Dinner");
    dinner.classList.add("dinner");

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

    const item3 = makeEl("full-item");
    const title3 = makeEl("menu-title", "div", "Wafers");
    const subtitle3 = makeEl("menu-sub-title", "div",
    "They're organic and dogs love them!");
    const waferBarry = makePic(wafer);
    item3.append(title3, subtitle3, waferBarry);

    const item4 = makeEl("full-item");
    const title4 = makeEl("menu-title", "div", "Pastina");
    const subtitle4 = makeEl("menu-sub-title", "div",
    "Small shaped pasta that fits perfectly on your chin");
    const pastinaBarry = makePic(pastina);
    item4.append(title4, subtitle4, pastinaBarry);

    const item5 = makeEl("full-item");
    const title5 = makeEl("menu-title", "div", "Pickle");
    const subtitle5 = makeEl("menu-sub-title", "div",
    "Big fat delicious renaissance-style pickle");
    const pickleBarry = makePic(pickle);
    item5.append(title5, subtitle5, pickleBarry);

    const item6 = makeEl("full-item");
    const title6 = makeEl("menu-title", "div", "Marinara");
    const subtitle6= makeEl("menu-sub-title", "div",
    "Just straight up marinara");
    const marinaraBarry = makePic(marinara);
    item6.append(title6, subtitle6, marinaraBarry);
    






    
    container.append(brunch,  item2, item3, item5, dinner, item1, item4, item6);


    


    return container;
}

function makePic(source) {
    const pic = new Image();
    pic.classList.add("menu-pic");
    pic.src = source;
    return pic;
}
