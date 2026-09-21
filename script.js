// navbar active //
const navBar = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik //
document.querySelector('#hamburger-menu')
onclick = () => {
   navBar.classList.toggle('active');
};
// ketika hamburger menu diklik di luar area navbar //
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navBar.contains(event.target)) {
        navbarNav.classList.remove('active');
    }
});