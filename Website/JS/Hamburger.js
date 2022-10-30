let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
        menuBtn.classList.add('open');
        navBottomBar.style.display = 'flex';
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        navBottomBar.style.display = 'none';
    }
});
let navBottomBar = document.querySelector('#nav-bottom-bar');