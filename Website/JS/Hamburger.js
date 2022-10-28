let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
// let navLinks = document.querySelector('#nav-links-section');
// let navSocials = document.querySelector('#nav-socials-section');
// let navContact = document.querySelector('#nav-contact-section');//

