document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
    document.querySelector(".list").classList.remove("active");
    document.querySelector(".grid").classList.add("active");
    document.querySelector(".products-area-wrapper").classList.add("gridView");
    document
        .querySelector(".products-area-wrapper")
        .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
    document.querySelector(".list").classList.add("active");
    document.querySelector(".grid").classList.remove("active");
    document.querySelector(".products-area-wrapper").classList.remove("gridView");
    document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');

// Check local storage for the mode and apply it on page load
if (localStorage.getItem('mode') === 'night') {
    document.documentElement.classList.add('light');
    modeSwitch.classList.add('active');
}

modeSwitch.addEventListener('click', function () {
    // Toggle the "light" class on the documentElement
    document.documentElement.classList.toggle('light');

    // Toggle the "active" class on the modeSwitch element
    modeSwitch.classList.toggle('active');

    // Store the current mode in local storage
    var currentMode = document.documentElement.classList.contains('light') ? 'night' : 'day';
    localStorage.setItem('mode', currentMode);
});
