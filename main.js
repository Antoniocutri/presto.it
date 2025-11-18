let navbar = document.querySelector('#navbar')
let links = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 10) {
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