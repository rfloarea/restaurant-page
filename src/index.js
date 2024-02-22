import './style.css';
import { buildHomepage } from './home.js';


window.addEventListener('load', buildHomepage);


// header component: nav container and three buttons/tabs: home, about, menu
const nav = document.querySelector('nav');

const homeBtn = document.createElement('button');
homeBtn.textContent = "Home";
nav.appendChild(homeBtn);

const aboutBtn = document.createElement('button');
aboutBtn.textContent = "About";
nav.appendChild(aboutBtn);

const menuBtn = document.createElement('button');
menuBtn.textContent = "Menu";
nav.appendChild(menuBtn);