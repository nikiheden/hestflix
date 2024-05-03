const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
} )

const imageContainers = document.querySelectorAll('.image_container');

imageContainers.forEach(container => {
    container.addEventListener('click', function() {
      
      alert('Sign up for free and watch this and thousands of other horse movies!');
    });
});

