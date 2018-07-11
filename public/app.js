function openNav() {
    document.getElementById("mySidenav").style.width = "24%";
    document.getElementById("mySidenav").style.height = "100%";
    // document.getElementById('main').style.marginLeft = '500px';
    // document.getElementsByClassName("navRight").style.height = "360px";
    document.getElementsByClassName('left')[0].style.display = 'block';
    document.getElementById('mySidenav').classList.toggle('mobileNav')
   
    // document.body.style.backgroundColor = "rgba(34,33,33,.9)";
    
    
}
function openAccount() {
    document.getElementById("accountTab").style.width = "24%";
    // document.body.style.backgroundColor = "rgba(34,33,33,.9)";
    document.getElementsByClassName('right')[0].style.display = 'block';
    document.getElementById('accountTab').classList.toggle('mobileNav')
    
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName('backArrow')[0].style.display = 'none';
    document.body.style.backgroundColor = "#222121";
    document.getElementById('mySidenav').classList.toggle('mobileNav')
    document.getElementById('main').style.marginLeft = '0px';
}

function closeAccount() {
    document.getElementById("accountTab").style.width = "0";
    document.getElementsByClassName('right')[0].style.display = 'none';
    document.body.style.backgroundColor = "#222121";
    document.getElementById('accountTab').classList.toggle('mobileNav')

}