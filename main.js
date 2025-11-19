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


let counter = 0

let span_sell = document.querySelector('#span_sell')
let span_client = document.querySelector('#span_client')

let confirm = true


function custom_interval(max,span , time){

    let interval = setInterval(()=>{
        if (counter < max) {
            counter++
            span.innerHTML=counter
        }else{
            clearInterval(interval)
        }
    },time)

    setTimeout(()=>{
        confirm = true
    }, 8000)
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting && confirm) {
            custom_interval(200, span_sell, 50)
            custom_interval(180, span_client, 10) 
            confirm = false
        }
        
    });
})

observer.observe(span_sell)


let reviews = [
    {user: "Antonino", descriptio: "Il più bel sito di annunci", rankin:'5'},
    {user: "Pietro", descriptio: "Non mi piace proprio", rankin:'1'},
    {user: "Fabio", descriptio: "bello ma non mi fa impazzire", rankin:'3'},
    {user: "Sarah", descriptio: "si può migliorare", rankin:'2'},
    {user: "Giovanni", descriptio: "bello, ma non perfetto", rankin:'4'},
]

let swiper_wrapper = document.querySelector('.swiper-wrapper') 

reviews.forEach(review => {
    let div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.innerHTML= `<div class="card w-50 border border-info bg-orange rounded-pill bg-white ">
                        <div class="card-body">
                            <div class="star">
                                
                            </div>
                            <h5 class="card-title mt-2">${review.user}</h5>
                            <p class="card-text">${review.descriptio}</p>
                        </div>
                    </div>`
    swiper_wrapper.appendChild(div)
});

let stars = document.querySelectorAll('.star')

stars.forEach((star, index) => {
    for (let i = 0; i <= reviews[index].rankin; i++) {
        let icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-star', 'text-warning')

        star.appendChild(icon)
    }

    let difference = 5- reviews[index].rankin
    for (let i = 0; i < difference; i++) {
        let icon = document.createElement('i')
        icon.classList.add( 'fa-regular','fa-star')

        star.appendChild(icon)
    }
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect: 'flip',
  grab_coursor: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});