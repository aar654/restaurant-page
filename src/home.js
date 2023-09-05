//function that creates the home page
function createHome() {
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
    locationH1.innerHTML = "Address: 1234 Street Name, City, State, 00000";

    home.appendChild(specials);
    home.appendChild(hours);
    home.appendChild(location);
    specials.appendChild(specialsH1);
    hours.appendChild(hoursH1);
    location.appendChild(locationH1);

    return home;
}

function loadHome() {
    const header = document.getElementById('header');
    header.appendChild(createHome());
}

export default loadHome;