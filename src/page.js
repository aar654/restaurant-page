//import functions that load the pages
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

//function that creates the header
function createHeader() {
    const header = document.createElement("div");
    header.setAttribute('id', 'header');

    const headerImg = document.createElement("img");
    headerImg.src = "imgs/mamas.png";
    headerImg.setAttribute('id', 'header-img');

    const buttonNavDiv = document.createElement("div");
    buttonNavDiv.setAttribute('id', 'button-nav');

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home-btn');
    homeBtn.classList.add('btn');
    homeBtn.innerHTML = "Home"

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu-btn');
    menuBtn.classList.add('btn');
    menuBtn.innerHTML = "Menu"

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('btn');
    contactBtn.setAttribute('id', 'contact-btn');
    contactBtn.innerHTML = "Contact"
    const hr = document.createElement('hr');

    header.appendChild(headerImg);
    header.appendChild(buttonNavDiv);
    buttonNavDiv.appendChild(homeBtn);
    buttonNavDiv.appendChild(menuBtn);
    buttonNavDiv.appendChild(contactBtn);
    header.appendChild(hr);

    homeBtn.onclick = function () {
        home.style.display = "flex"
        menu.style.display = "none"
        contact.style.display = "none"
    }

    menuBtn.onclick = function () {
        home.style.display = "none"
        menu.style.display = "flex"
        contact.style.display = "none"
    }
    contactBtn.onclick = function () {
        home.style.display = "none"
        menu.style.display = "none"
        contact.style.display = "flex"
    }

    return header;
}

//function appends website and sends it to the index.js file
function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    loadHome();
    loadMenu();
    loadContact();
}

export default initializeWebsite;

