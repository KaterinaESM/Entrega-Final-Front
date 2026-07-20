
document.addEventListener('DOMContentLoaded', () => {

    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const navbar = document.getElementById('navbar');


    bar.addEventListener('click',()=>{
        navbar.classList.add('active');
    });


    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    });


})