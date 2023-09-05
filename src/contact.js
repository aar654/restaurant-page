function createContact() {

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const contactH1 = document.createElement('h1');
    contactH1.innerHTML = "Address: 1234 Street Name, City, State, 00000"

    const contactH2 = document.createElement('h1');
    contactH2.innerHTML = "Telephone: (777) 777-7777"

    const map = document.createElement('img');
    map.src = "imgs/map.png"

    contact.appendChild(contactH1);
    contact.appendChild(contactH2);
    contact.appendChild(map);

    return contact;
}

function loadContact() {
    const header = document.getElementById('header');
    header.appendChild(createContact());
}

export default loadContact;