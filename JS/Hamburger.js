let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let navBottomBar = document.querySelector('#nav-bottom-bar');
let mainContent = document.querySelector('.mainContent');
let sideBar = document.querySelector('.sidebar')
menuBtn.addEventListener('click',() =>{
    if (!menuOpen){
        menuBtn.classList.add('open');
        navBottomBar.style.display = 'flex';
        menuOpen = true;
        mainContent.style.display = 'none';
        sideBar.style.display = 'none'
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        navBottomBar.style.display = 'none';
        mainContent.style.display = 'block';
        sideBar.style.display = 'flex'
    }
});
