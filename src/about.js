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

    const copy = makeEl("copy");
    copy.innerText = "People say a baby can't run a restaurant\nWell, they've never been to Barry's";

    const hours = makeEl("hours");
    const hoursTitle = makeEl("hours-title", "div", "Hours");
    const hoursText = makeEl("text", "div")
    hoursText.innerText = "Mon:   TBD\nTues:   TBD\nWed:   TBD\nThurs:   TBD\nIDK we'll call you";
    hours.append(hoursTitle, hoursText);

    const location = makeEl("location");
    const locTitle = makeEl("loc-title", "div", "Location");
    const locText = makeEl("text", "div", "101 Cocomelon Ave, Baby Sharksville");
    location.append(locTitle, locText);

    
    container.append(titleContainer, barry, copy, hours, location);


    


    return container;
}