const baseUrl = `https://api.jikan.moe/v4`

const animeListEl = document.querySelector('.anime__list') 

const searchResultEl = document.querySelector('.search__result')

let isModalOpen = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visable"
    emailjs
        .sendForm(
            'service_bwodtwx',
            'template_eiywp1k',
            event.target,
            'user_zR7xVOSuitbB47julzrU0'
        ).then(() => {
            loading.classList.remove("modal__overlay--visable")
            success.classList += (" modal__overlay--visable")

        }).catch(() => {
            loading.classList.remove(" modal__overlay--visable")
            alert(
                "The email service is temorarily unavailable. Please contact me directly on esa_riaz@hotmail.com"
            )
        })
}



function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");

    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

function stopRefresh(event) {
    event.preventDefault()
}

function animeFinder(event) {
    const title = event.target.value 
    main(title)
    
    
}

async function main() {
    const title =  document.getElementById('title').value

    searchResultEl.innerHTML = `
    <p>Search results for :  <span class="orange">${title}</span></p>`
    
    const anime = await fetch(`${baseUrl}/anime?q=${title}`)
    
    let { data } = await anime.json();
    
    const looped = data.forEach(animes=> console.log(animes))

    
    console.log(data)
    
    animeListEl.innerHTML = data.map(data => animeInner(data)).join('')
    
}




function animeInner(data) {
    return  `<div class="anime__list--item" onclick="animeSelected(${data.mal_id})">
     <img class="anime__img" src="${data.images.jpg.image_url}">
    <div class="anime__title">
        ${data.title}
    </div>
    <div class="anime__title">
        ${data.title_japanese}
    </div>
</div>`
}

function animeSelected(id) {
    
    localStorage.setItem('animeId' , id)
    window.location.href = `${origin}/about.html`
    console.log(id)
}

function ratingsFilter(event) {
    console.log(event.target.value)
}
main()




