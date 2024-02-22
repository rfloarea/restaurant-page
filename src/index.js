console.log('it works!!');

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

// content component: title, description, image
const content = document.querySelector('#content');

const title = document.createElement('h1');
title.textContent = "BEST RESTAURANT NEAR ME";
content.appendChild(title);

const tagLine = document.createElement('p');
tagLine.textContent= "The number one destination among people searching the web for food.";
content.appendChild(tagLine);