var filterHeader = document.getElementById("filter-header");
var dropContent = document.getElementById("drop-content");
var searchIcon = document.getElementById("search");

// Toggle the search bar on / off
filterHeader.addEventListener("click", function() {
    dropContent.classList.toggle("hidden");
    if (!dropContent.classList.contains("hidden")) {
        dropContent.style.maxHeight = dropContent.scrollHeight + "px";
        searchIcon.style.opacity=1;
    } else {
        dropContent.style.maxHeight = 0;
        searchIcon.style.opacity=0;
    }
});

// Toggle on / off the search filters
const filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach(item => {
    item.addEventListener('click', function() {
        const checkbox = this.nextElementSibling;

        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            this.style.backgroundColor = 'skyblue';
        } else {
            this.style.backgroundColor = 'initial';
        }
    });
});

// Add a technology input for more searching
const addTechnology = document.getElementById("add-technology");
const techContainer = addTechnology.parentElement;

addTechnology.addEventListener("click", function () {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "technologyDetails";
    newInput.placeholder = "Technology";
    techContainer.insertBefore(newInput, addTechnology); // Insert above the "Add" button

    dropContent.style.maxHeight = dropContent.scrollHeight + "px";
});
