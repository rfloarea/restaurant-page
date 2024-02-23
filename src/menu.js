// about
import menuImage from './images/menu.jpg';

export function buildMenuPage() {
    // content component: title, info, image
    const content = document.querySelector('#content');
    // title
    const title = document.createElement('h1');
    title.textContent = "OUR MENU";
    content.appendChild(title);
    // info
    const info = document.createElement('p');
    info.textContent= "We actually don't have our own menu. We just order what people want off GrubHub and have them deliver it here. It's basically the same thing as cooking, only we don't actually have to cook. So that's nice.";
    content.appendChild(info);
    // image
    const menuImg = document.createElement('img');
    menuImg.src = menuImage;
    menuImg.alt = "A yellow sticky note with a drawing of a lightbulb, pinned to a corkboard."
    content.appendChild(menuImg);
};