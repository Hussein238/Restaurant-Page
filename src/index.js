import './style.css';
import { homeContent } from './home';
import { menu } from './menu';
import { contact } from './contact';

const body = document.body;
body.classList.add('background');


const container = document.getElementById('content');

const headline = document.createElement('div');
headline.classList.add('headline');
const title = document.createElement('h1');
title.innerText = 'La Cucina Italiana';
title.classList.add('title');
const btnGroup = document.createElement('div');
btnGroup.classList.add('btnGroup');
const homeBtn = document.createElement('button');
homeBtn.innerText = 'HOME';
const menuBtn = document.createElement('button');
menuBtn.innerText = 'MENU';
const contactBtn = document.createElement('button');
contactBtn.innerText = 'CONTACT';

homeBtn.classList.add('tabBtn');
menuBtn.classList.add('tabBtn');
contactBtn.classList.add('tabBtn');

btnGroup.appendChild( homeBtn );
btnGroup.appendChild( menuBtn );
btnGroup.appendChild( contactBtn );

headline.appendChild(title);
headline.appendChild( btnGroup);

container.appendChild(headline); // add headline to body dom
container.appendChild(homeContent()); // Add initial load content

homeBtn.addEventListener('click', ()=>{ // Switch to home after home clicking 
    container.removeChild(container.lastElementChild);
    container.appendChild(homeContent());
})

menuBtn.addEventListener('click', ()=>{ // Switch to menu after clicking menu button
    container.removeChild(container.lastElementChild);
    container.appendChild(menu());
})

contactBtn.addEventListener('click', ()=>{ // Switch to contact tab after button press
    container.removeChild(container.lastElementChild);
    container.appendChild(contact());
})
