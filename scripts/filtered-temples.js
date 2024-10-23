// let headernav = document.querySelector('header');
// window.onscroll = function () {
//     if (window.scrollY > 0) {
//         headernav.style.background = 'rgb(248, 9, 228);';
//     } else {
//         headernav.style.background = 'transparent';
//     }
// }

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        navMenu.classList.add("active");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Vancouver British Columbia",
        location: "Langley, British Columbia, Canada",
        dedicated: "2007, August, 4",
        area: 2617,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1982,November,27",
        area: 1782,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    }
];

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900))
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000))
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000))
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000))
});

function createTempleCard(filteredTemples) {
    document.querySelector(".temples").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        let caption = document.createElement("figcaption");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        card.appendChild(img);
        card.appendChild(caption);

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedicated);
        caption.appendChild(area);
        document.querySelector(".temples").appendChild(card);
    });
}
createTempleCard(temples);

// // Function to display temples
// function displayTemples(templeList) {
//     const templeCards = document.getElementById("templecards");
//     templeCards.innerHTML = '';  // Clear previous content

//     templeList.forEach(temple => {
//         const card = document.createElement('figure');
//         card.innerHTML = `
//         <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
//         <figcaption>
//           <h3>${temple.templeName}</h3>
//           <p>Location: ${temple.location}</p>
//           <p>Dedicated: ${temple.dedicated}</p>
//           <p>Area: ${temple.area} sq. ft.</p>
//         </figcaption>`;
//         templeCards.appendChild(card);
//     });
// }

// // Initial Display of All Temples
// displayTemples(temples);

// // Function to filter temples based on the navigation clicked
// function filterTemples(filter) {
//     let filteredTemples;

//     if (filter === 'old') {
//         filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//     } else if (filter === 'new') {
//         filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//     } else if (filter === 'large') {
//         filteredTemples = temples.filter(temple => temple.area > 90000);
//     } else if (filter === 'small') {
//         filteredTemples = temples.filter(temple => temple.area < 10000);
//     } else {
//         filteredTemples = temples;
//     }

//     displayTemples(filteredTemples);
// }