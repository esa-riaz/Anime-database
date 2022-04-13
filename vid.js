const player = document.querySelector('.player')

const video = document.querySelector('.viewer')

const progress = document.querySelector('.progress')

const progressBar = document.querySelector('.progress__filled')

const toggle = document.querySelector('.toggle')

const skipButtons = document.querySelector('.skipper')

const ranges = document.querySelector('.player__slider')

console.log(skipButtons)

function togglePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function updateButton() {
    const icon = this.paused ? `<i class="fas fa-play"></i>` : `<i class="fas fa-pause"></i>`
    toggle.innerHTML = icon
}

function skip(event) {
    console.log(event.target.value)
    video.currentTime += parseFloat(event.target.value)
}



video.addEventListener('click' , togglePlay)
video.addEventListener('play' , updateButton)
video.addEventListener('pause' , updateButton)
video.addEventListener('timeupdate' , handleProgress)

toggle.addEventListener('click' , togglePlay)



