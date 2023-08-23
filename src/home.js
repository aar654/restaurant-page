//function that makes the entire website
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

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    const specials = document.createElement('div');
    specials.setAttribute('id', 'specials');
    const specialsH1 = document.createElement('h1');
    specialsH1.innerHTML = "Specials: Every Sunday - Thursday Large Cheese Pizza $11.99";
    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    const hoursH1 = document.createElement('h1');
    hoursH1.innerHTML = "Hours: Sunday - Thursday: 10:30AM to 9PM and Friday - Saturday: 10:30AM to 10PM";
    const location = document.createElement('div');
    location.setAttribute('id', 'location');
    const locationH1 = document.createElement('h1');
    locationH1.innerHTML = "Address: 145 E. Penn Avenue Cleona, PA 17042";

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const menuH1 = document.createElement('h1');
    menuH1.innerHTML = "Pizza: $10.99";
    const menuImg1 = document.createElement('img');
    menuImg1.src = "imgs/pizza.jpg";

    const menuH2 = document.createElement('h1');
    menuH2.innerHTML = "Subs: $20.99";
    const menuImg2 = document.createElement('img');
    menuImg2.src = "imgs/subs.jpg";

    const menuH3 = document.createElement('h1');
    menuH3.innerHTML = "Pasta: $40.99";
    const menuImg3 = document.createElement('img');
    menuImg3.src = "imgs/pasta.jpg";

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    
    const contactH1 = document.createElement('h1');
    contactH1.innerHTML = "Address: 145 E Penn Ave, Lebanon, PA 17042"

    const contactH2 = document.createElement('h1');
    contactH2.innerHTML = "Telephone: (717) 274-8383"

    const map = document.createElement('img');
    map.src = "imgs/map.png"

    header.appendChild(headerImg);
    header.appendChild(buttonNavDiv);
    buttonNavDiv.appendChild(homeBtn);
    buttonNavDiv.appendChild(menuBtn);
    buttonNavDiv.appendChild(contactBtn);
    header.appendChild(hr);
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);


    home.appendChild(specials);
    home.appendChild(hours);
    home.appendChild(location);
    specials.appendChild(specialsH1);
    hours.appendChild(hoursH1);
    location.appendChild(locationH1);

    menu.appendChild(menuH1);
    menu.appendChild(menuImg1);
    menu.appendChild(menuH2);
    menu.appendChild(menuImg2);
    menu.appendChild(menuH3);
    menu.appendChild(menuImg3);

    contact.appendChild(contactH1);
    contact.appendChild(contactH2);
    contact.appendChild(map);
    
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
}

export default initializeWebsite;

