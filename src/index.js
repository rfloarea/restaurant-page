import './style.css';
import { buildHomepage } from './home.js';
import { buildAboutPage } from './about.js';


window.addEventListener('load', buildHomepage);

// header component: nav container and three buttons/tabs: home, about, menu
const nav = document.querySelector('nav');

const homeBtn = document.createElement('button');
homeBtn.textContent = "Home";
nav.appendChild(homeBtn);
homeBtn.addEventListener('click', buildHomepage);
// homeBtn.addEventListener('click', clearContent(buildHomepage)) // clear page

const aboutBtn = document.createElement('button');
aboutBtn.textContent = "About";
nav.appendChild(aboutBtn);
aboutBtn.addEventListener('click', buildAboutPage);
// aboutBtn.addEventListener('click', ) // clear page

const menuBtn = document.createElement('button');
menuBtn.textContent = "Menu";
nav.appendChild(menuBtn);


// const container = document.querySelector('#content');

// function clearContent(page) {
//     container.replaceChildren(page);
// };