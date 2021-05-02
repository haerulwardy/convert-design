// show navbar
function showNavbar() {
    // navbar active
    navbarActive();
}
function navbarActive() {
    const resNavbar = document.querySelector('.responsive-nav');
    resNavbar.classList.add('active');

    // navbar close
    navbarDisable();
}
function navbarDisable() {
    const resClose = document.querySelector('.res-icon');
    resClose.addEventListener('click', function() {
        const resNavbar = document.querySelector('.responsive-nav');
        resNavbar.classList.remove('active');
    })
}