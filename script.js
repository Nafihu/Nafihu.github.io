// Function to open the specified tab
function openTab(tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the clicked tab
    document.getElementById(tabName).classList.add('active-tab');

    // Add active class to the clicked tab link
    const activeLink = document.querySelector(`a[onclick="openTab('${tabName}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Function to toggle hidden projects
document.getElementById('btn_more').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const hiddenProjects = document.querySelector('.hidden-projects');
    
    if (hiddenProjects.style.display === "none" || hiddenProjects.style.display === "") {
        hiddenProjects.style.display = "grid"; // Show hidden projects
        this.innerText = "See Less"; // Change button text
    } else {
        hiddenProjects.style.display = "none"; // Hide hidden projects
        this.innerText = "See More"; // Change button text
    }
});

// Function to update the header text based on screen width
function updateHeaderText() {
    const headerText = document.querySelector('.header-text h1');
    if (window.innerWidth < 600) {
        headerText.innerHTML = "Hi, my name is <br> Nafihu Lawal";
    } else {
        headerText.innerHTML = "Hi, my name is Nafihu Lawal"; // Original text
    }
}

// Initial call to set the correct text on page load
updateHeaderText();

// Add event listener for window resize
window.addEventListener('resize', updateHeaderText);


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
    document.body.style.overflow = "hidden"; // Prevent body scrolling
}

function closemenu() {
    sidemenu.style.right = "-200px"; // Move the menu offscreen
    document.body.style.overflow = ""; // Restore body scrolling
}
