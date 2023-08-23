function createHome() {
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

    header.appendChild(headerImg);
    header.appendChild(buttonNavDiv);
    buttonNavDiv.appendChild(homeBtn);
    buttonNavDiv.appendChild(menuBtn);
    buttonNavDiv.appendChild(contactBtn);

    return header;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHome());
}

export default initializeWebsite;

