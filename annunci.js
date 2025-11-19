
fetch('./annunci.json').then((response)=> response.json() ).then((data)=>{
    data.sort((a,b) => b.price - a.price)
    
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

    function truncate_words(string) {
        if (string.length > 15) {
           return string.split(' ')[0] + ' ...'
        }
        return string
    }

    function createCard(data) {
        card.innerHTML=''
        data.forEach(element => {
            let div = document.createElement('div')
            div.classList.add('card-body')
            div.innerHTML= `<div class="card border card-announce border-info bg-orange rounded-4 text-white d-flex align-items-center justify-content-center text-center m-2">
                    <div class="card-body  ">
                        <img src="https://picsum.photos/${element.id}" class="img-fluid img-card" alt="immagin casuale"> 
                        <h5 class="card-title mt-2">${truncate_words(element.name)}</h5>
                        <p class="card-text">${element.price}</p>
                        <p class="card-text"> ${element.category}</p>
                    </div>
                </div>`
            card.appendChild(div)
        });
    }

    let radioButtons = document.querySelectorAll('.form-check-input')

    function filter_Category(array) {
       
        let checkedButton = Array.from(radioButtons).find(button => button.checked).id;

        console.log(checkedButton)

        if (checkedButton != 'all') {
            let filterd = array.filter((announce)=> announce.category == checkedButton)
            return filterd
        }
        return data
    }



    radioButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            global_filter()
            price_input()
        })
    })

    let range= document.querySelector('#range')
    let price_value = document.querySelector('#price_value')

    range.addEventListener('input', ()=>{
        global_filter()
        price_value.textContent= range.value
    })

    price_input()

    function price_input() {
        let prices = filter_Category(data).map((announce)=> +announce.price)

        prices.sort((a,b) => a - b)
        let maxPrice = Math.ceil(prices.pop())

        range.max = maxPrice
        range.value = maxPrice
        price_value.textContent= maxPrice
        
    }

    function filter_price(array) {
        let filterd = array.filter((announce)=> +announce.price <= range.value)
       // createCard(filterd)
       return filterd
    }


    let input_word = document.querySelector('#input_word')

    function filter_word(array) {
        let filtered = array.filter((announce)=> announce.name.toLowerCase().includes(input_word.value.toLowerCase()) )
        //createCard(filtered)
        return filtered

    }

    input_word.addEventListener('input', ()=>{
        global_filter()
    })

    function global_filter() {

        let filter_Categories = filter_Category(data)
        let filter_priced = filter_price(filter_Categories)
        let filter_global = filter_word(filter_priced)
        
        createCard(filter_global)
    }
})