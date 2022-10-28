let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        // navLinks.style.display= 'none';
        // navSocials.style.display= 'none';
        // navContact.style.display= 'none';
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        // navLinks.style.display= 'flex';
        // navSocials.style.display= 'flex';
        // navContact.style.display= 'flex';
    }
});


let navLinks = document.querySelector('#nav-links-section');
let navSocials = document.querySelector('#nav-socials-section');
let navContact = document.querySelector('#nav-contact-section');