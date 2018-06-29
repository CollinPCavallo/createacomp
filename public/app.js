function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "500px";
    document.body.style.backgroundColor = "rgba(34,33,33,.9)";
}
function openAccount() {
    document.getElementById("accountTab").style.width = "250px";
    document.getElementById("main").style.marginRight = "500px";
    document.body.style.backgroundColor = "rgba(34,33,33,.9)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#222121";
}

function closeAccount() {
    document.getElementById("accountTab").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "#222121";
}