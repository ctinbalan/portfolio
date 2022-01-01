function showPopup(n) {
    let popup = document.getElementById("popup-" + n);
    popup.classList.toggle("show");
}

function myFunction() {
    let menu = document.getElementById("hamburger");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    let x = document.getElementById("hbg-menu-icon");
    x.classList.toggle("change");
}
