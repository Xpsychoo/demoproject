function showNav() {
    var sidebar = document.querySelector(".site-nav");
    var isSidebarShown = sidebar.classList.contains("show-sidebar");

    if (isSidebarShown) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }

}

function closeNav() {
    var sidebar = document.querySelector(".site-nav");
    var isSidebarShown = sidebar.classList.contains("show-sidebar");

    if (isSidebarShown) {
        sidebar.classList.remove("show-sidebar");
    }

}