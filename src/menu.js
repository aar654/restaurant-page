//function that creates the menu page
function createMenu() {
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

    menu.appendChild(menuH1);
    menu.appendChild(menuImg1);
    menu.appendChild(menuH2);
    menu.appendChild(menuImg2);
    menu.appendChild(menuH3);
    menu.appendChild(menuImg3);

    return menu;
}

function loadMenu() {
    const header = document.getElementById('header');
    header.appendChild(createMenu());
}

export default loadMenu;