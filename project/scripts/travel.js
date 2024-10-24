// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the copyright year in the footer
document.getElementById("currentyear").textContent = currentYear;

// Update the last modified date in the footer
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate