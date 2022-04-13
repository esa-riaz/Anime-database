const id = localStorage.getItem("animeId")

const baseUrl = ` https://api.jikan.moe/v4`

const mainMainEl = document.querySelector('.main__main--wrapper')



async function main(id) {
    console.log(id)
    
    const anime = await fetch(`${baseUrl}/anime/${id}`)
    
    let { data } = await anime.json();
    console.log(data)

    const data1 = Object.values(data)
    
    console.log(data1)
    
    
    mainMainEl.innerHTML =` <div class="main__description--wrapper">
    <figure class="img__wrapper">
       <img class="anime__img" src="${data1[2].jpg.image_url}" alt="">
       
        <a href="./vid.html" class="watch__now--link btn watch__now" target="_blank">
         Watch Now
            </a>
        
    </figure>
    <div class="description">
        <h3 class="anime__title">
            ${data1[4]} / ${data1[6]}
        </h3>
        <p class="synopsis">
            ${data1[22]}
        </p>
        <p class="extra__info">
           Type : ${data1[8]} 
           <br>
           Status :  ${data1[11]}
           <br>
           Rating : ${data1[15]}
        </p>
    </div>
</div>`

}
main(id)


async function main3() {
    const anime = await fetch(`https://api.jikan.moe/v4/genres/anime`)
    
    let { data4 } = await anime.json();
    console.log(data4)
}
main3()

