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

const aboutBtn = document.createElement('button');
aboutBtn.textContent = "About";
nav.appendChild(aboutBtn);
aboutBtn.addEventListener('click', buildAboutPage);

const menuBtn = document.createElement('button');
menuBtn.textContent = "Menu";
nav.appendChild(menuBtn);