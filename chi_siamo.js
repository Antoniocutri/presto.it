let openerr= document.querySelector('.opener')
let circle = document.querySelector('.circle')



let teachers = [
    {name: 'Matteo', description: 'Docente Frontend di Hackademy 69', url: 'Media/sinner.jpg'},
    {name: 'Marco', description: 'Docente Frontend e responsabile Hackademy', url: 'Media/download.jpg'},
    {name: 'Nicola', description: 'Docente Frontend e noto sex symbol', url: './media/santinooo.jpg'},
    {name: 'Davide', description: 'Docente Backend e giocatore di ruolo', url: './media/volto_uomo.jpg'},
]

let check = false

teachers.forEach(teacher => {
    let div = document.createElement('div')
    div.classList.add('moved', 'rounded-circle', 'border', 'border-3', 'border-white', 'opener', 'justify-content-center', 'align-items-center' ,'position-absolute')
    div.style.backgroundImage = `url(${teacher.url})`
    circle.appendChild(div)
});

let moved = document.querySelectorAll('.moved')

openerr.addEventListener('click', ()=>{

    if (!check) {
        moved.forEach((element, index) => {
            openerr.style.transform = 'rotate(405deg)'
            let angle = 360 * index / moved.length 
            element.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
        });
        check = true
    } else {
        moved.forEach((element) => {
            openerr.style.transform = ''
            element.style.transform = ``
        });
        check= false
    }
})


moved.forEach((move, i)=>{
    move.addEventListener('click', ()=>{

        let teacher = move[i]

    })
})