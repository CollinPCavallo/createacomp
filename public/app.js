function openNav() {
    document.getElementById("mySidenav").style.width = "24%";
    document.getElementById("mySidenav").style.height = "100%";
    // document.getElementsByClassName("navRight").style.height = "360px";
    document.getElementById("main").style.marginLeft = "500px";
    document.getElementsByClassName('left')[0].style.display = 'block';
    document.getElementsByClassName('backArrow')[0].style.marginLeft = '25%';
    // document.body.style.backgroundColor = "rgba(34,33,33,.9)";
    
    
}
function openAccount() {
    document.getElementById("accountTab").style.width = "24%";
    document.getElementById("main").style.marginRight = "500px";
    // document.body.style.backgroundColor = "rgba(34,33,33,.9)";
    document.getElementsByClassName('right')[0].style.display = 'block';
    document.getElementsByClassName('right')[0].style.marginLeft = '67%';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementsByClassName('backArrow')[0].style.display = 'none';
    document.body.style.backgroundColor = "#222121";
}

function closeAccount() {
    document.getElementById("accountTab").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementsByClassName('right')[0].style.display = 'none';
    document.body.style.backgroundColor = "#222121";
}