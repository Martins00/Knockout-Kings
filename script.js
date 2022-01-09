// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

const box = (aboutUs) =>{
    const box = document.getElementById("box");
    const boxm = document.getElementById("boxm");

    boxm.innerHTML = (aboutUs === undefined)? "" : aboutUs ;
    box.style.display = (aboutUs === undefined)? "none" : "block";
}

const container = (contactus) => {
    const container = document.getElementById("container");
    const containerm = document.getElementById("containerm");

    containerm.innerHTML = (contactus === undefined)? "" : contactus ;
    container.style.display = (contactus === undefined)? "none" : "block";
}