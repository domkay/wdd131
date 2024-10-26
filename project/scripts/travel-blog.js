// Display the current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModifiedDate').textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('header nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('loading');
    });

    // Create cards for each destination
    createDestCard();
});

// Destination data
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

// Create cards for each destination
function createDestCard() {
    const destContainer = document.querySelector(".dest");
    destContainer.innerHTML = "";

    const shuffledDestinations = destinations.sort(() => 0.5 - Math.random());
    const limitedDestinations = shuffledDestinations.slice(0, 3);

    limitedDestinations.forEach(dest => {
        let destCard = document.createElement("figure");
        let caption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let img = document.createElement("img");
        let link = document.createElement("a");

        name.textContent = dest.destName;
        description.innerHTML = `<span class="label"><b>Description:</b></span> ${dest.description}`;
        img.setAttribute("src", dest.imageUrl);
        img.setAttribute("alt", `${dest.destName} Destination`);
        img.setAttribute("loading", "lazy");
        link.setAttribute("href", "");
        link.textContent = "Read More";

        destCard.appendChild(img);
        destCard.appendChild(caption);
        caption.appendChild(name);
        caption.appendChild(description);

        destContainer.appendChild(destCard);
    });
}
