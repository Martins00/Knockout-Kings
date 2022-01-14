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