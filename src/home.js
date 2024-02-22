// homepage
import heroImage from './images/woman-eating-fry.jpg';

export function buildHomepage() {
    // content component: title, tagline, image
    const content = document.querySelector('#content');
    // title
    const title = document.createElement('h1');
    title.textContent = "BEST RESTAURANT NEAR ME";
    content.appendChild(title);
    // tagline
    const tagLine = document.createElement('p');
    tagLine.textContent= "The number one destination among people searching the web for food.";
    content.appendChild(tagLine);
    // image
    const heroImg = document.createElement('img');
    heroImg.src = heroImage;
    heroImg.alt = "Woman with long straight brown hair eating a french fry in a restaurant and feeling great about it."
    content.appendChild(heroImg);
};