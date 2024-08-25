//Darkmode + lightmode
const moonIcon = document.getElementById('moonIcon')
const sunIcon = document.getElementById('sunIcon')

moonIcon.addEventListener('click', darkMode)
sunIcon.addEventListener('click', lightMode)

const body = document.body
const nav = document.getElementById('nav')

function darkMode() {
    moonIcon.classList.toggle('hidden')
    sunIcon.classList.toggle('hidden')

    nav.style.backgroundColor = 'rgb(40, 40, 40)'
    nav.style.boxShadow = 'none'
    body.style.backgroundColor = 'rgb(20, 20, 20)'
    body.style.color = 'rgb(220, 220, 220)'
}

function lightMode() {
    moonIcon.classList.toggle('hidden')
    sunIcon.classList.toggle('hidden')

    nav.style.backgroundColor = 'rgb(187, 187, 187)'
    nav.style.boxShadow = '0px 1px 6px #000000'
    body.style.backgroundColor = 'rgb(255, 255, 255)'
    body.style.color = 'black'
}

//Status text scrolling past
const statusText = document.getElementById('status')
statusText.textContent = "OBS! This site is currently W.I.P, nothing here is final!!! :P"

var timeLine = gsap.timeline({
    onComplete: function() {
        timeLine.invalidate()
        timeLine.restart()
    }
})

timeLine.to("#statusContainer", {
    duration: 1,
    top: "-=50px",
    ease: 'expo.inOut',
    delay: 3
})

timeLine.fromTo("#status", {
    marginLeft: "100%",
}, {
    duration: 10,
    marginLeft:"-100%",
    ease: 'linear'
})

timeLine.to("#statusContainer", {
    duration: 1,
    top: "+=50px",
    ease: 'expo.inOut',
})