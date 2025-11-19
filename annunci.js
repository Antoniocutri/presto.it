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



fetch('./annunci.json').then((response)=> response.json() ).then((data)=>{
    let radio = document.querySelector('#radio')
    let card= document.querySelector('#card-announce')
    
    radioCreate(data)
    createCard(data)
    

    function radioCreate(data){
        
        let categories = data.map( (announce)=> announce.category)

        let unique = Array.from(new Set(categories))

        unique.forEach(element => {
            let div = document.createElement('div')
            div.classList.add('form-check')
            div.innerHTML=`<input class="form-check-input" type="radio" name="radioDefault" id="${element}">
                                    <label class="form-check-label" for="${element}">
                                    ${element}
                                    </label>`
            radio.appendChild(div)
        });
    }

    function createCard(data) {
        data.forEach(element => {
            let div = document.createElement('div')
            div.classList.add('card-body')
            div.innerHTML= `<div class="card border card-announce border-info bg-orange rounded-4 text-white d-flex align-items-center justify-content-center text-center m-2">
                    <div class="card-body  ">
                        <h5 class="card-title mt-4">${element.name}</h5>
                        <p class="card-text">${element.price}</p>
                        <p class="card-text"> ${element.category}</p>
                    </div>
                </div>`
            card.appendChild(div)
        });
        
        
    }

})