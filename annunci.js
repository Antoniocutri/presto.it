let navbar = document.querySelector('#navbar')
let links = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 10) {
        console.log(window.scrollY)
        navbar.classList.remove('bg-blu')
        navbar.classList.add('bg-green')
        navbar.style.height = '130px' 
        links.forEach(link => {
            link.style.color = 'var(--dark_grey)'
        });
        
    }else{
        navbar.classList.remove('bg-green')
        navbar.classList.add('bg-blu') 
        links.forEach(link => {
            link.style.color = 'var(--orange)'
        });
        navbar.style.height = '70px' 
        
    }
})
const toggler = document.querySelector('.navbar-toggler');
toggler.addEventListener('click', () => {
    const isOpen = toggler.getAttribute('aria-expanded') === "true";

    if (isOpen) {
        navbar.style.height = "200px";   // altezza quando aperto
    } else {
        navbar.style.height = "70px";    // altezza normale
    }
});
