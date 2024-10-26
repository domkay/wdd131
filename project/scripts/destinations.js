document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModifiedDate').textContent = document.lastModified;

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    displayDestinations();
});

const destinations = [
    {
        destName: "Victoria Falls",
        location: "Livingstone, Zambia",
        description: "One of the largest and most famous waterfalls in the world, offering breathtaking views and thrilling activities.",
        imageUrl: "images/victoriafalls.png",
        region: "africa",
        travelType: "adventure",
        budget: "medium"
    },
    {
        destName: "Great Wall of China",
        location: "Beijing, China",
        description: "An ancient series of walls and fortifications stretching over 13,000 miles, showcasing a rich history and stunning landscapes.",
        imageUrl: "images/wall-of-china.png",
        region: "asia",
        travelType: "historical",
        budget: "medium"
    },
    {
        destName: "Santorini",
        location: "Santorini, Greece",
        description: "A beautiful island in the Aegean Sea, known for its whitewashed buildings, blue-domed churches, and stunning sunsets.",
        imageUrl: "images/santorini.png",
        region: "europe",
        travelType: "romantic",
        budget: "high"
    },
    {
        destName: "Machu Picchu",
        location: "Cusco Region, Peru",
        description: "An ancient Incan city set high in the Andes Mountains, renowned for its archaeological significance and breathtaking scenery.",
        imageUrl: "images/machupicchu.png",
        region: "south-america",
        travelType: "adventure",
        budget: "medium"
    },
    {
        destName: "Bora Bora",
        location: "French Polynesia",
        description: "A small South Pacific island known for its turquoise waters, luxurious overwater bungalows, and beautiful coral reefs.",
        imageUrl: "images/borabora.png",
        region: "oceania",
        travelType: "luxury",
        budget: "high"
    }
];

function displayDestinations() {
    const destList = document.querySelector('.destination-list');
    destList.innerHTML = '';

    destinations.forEach(dest => {
        const destElement = document.createElement('div');
        destElement.className = 'destination';
        destElement.setAttribute('data-region', dest.region);
        destElement.setAttribute('data-travel-type', dest.travelType);
        destElement.setAttribute('data-budget', dest.budget);

        const img = document.createElement('img');
        img.setAttribute('src', dest.imageUrl);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', dest.destName);

        const description = document.createElement('div');
        description.className = 'description';

        const h3 = document.createElement('h3');
        h3.textContent = dest.destName;

        const p = document.createElement('p');
        p.textContent = dest.description;

        const a = document.createElement('a');
        a.setAttribute('href', `#`);
        a.textContent = 'Read More';

        description.appendChild(h3);
        description.appendChild(p);
        description.appendChild(a);

        destElement.appendChild(img);
        destElement.appendChild(description);
        destList.appendChild(destElement);
    });
}

function filterDestinations() {
    const region = document.getElementById("region").value;
    const travelType = document.getElementById("travel-type").value;
    const budget = document.getElementById("budget").value;

    const destinations = document.querySelectorAll(".destination");

    destinations.forEach((destination) => {
        const destRegion = destination.dataset.region;
        const destType = destination.dataset.travelType;
        const destBudget = destination.dataset.budget;

        if ((region === "all" || region === destRegion) &&
            (travelType === "all" || travelType === destType) &&
            (budget === "all" || budget === destBudget)) {
            destination.style.display = "flex";
        } else {
            destination.style.display = "none";
        }
    });
}
