// about
import aboutImage from './images/lightbulb.jpg';

export function buildAboutPage() {
    // content component: title, info, image
    const content = document.querySelector('#content');
    // title
    const title = document.createElement('h1');
    title.textContent = "ABOUT US";
    content.appendChild(title);
    // info
    const info = document.createElement('p');
    info.textContent= "People say we have the best food! But mostly, they just say we're killing it at SEO. But I don't know what that means!";
    content.appendChild(info);
    // image
    const aboutImg = document.createElement('img');
    aboutImg.src = aboutImage;
    aboutImg.alt = "A yellow sticky note with a drawing of a lightbulb, pinned to a corkboard."
    content.appendChild(aboutImg);
};