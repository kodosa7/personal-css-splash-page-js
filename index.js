const vfLogo = document.getElementById('vf-logo')
const buttons = document.querySelector('.buttons')
const lastNameBackground = document.querySelector('.lastname')
vfLogo.style.display = "none"
buttons.style.display = "none"
lastNameBackground.classList.add("lastname-before-change")

setTimeout(() => {
    vfLogo.style.display = ""
}, 2500)

setTimeout(() => {
    buttons.style.display = "";
}, 3500)

setTimeout(() => {
    lastNameBackground.classList.add("lastname-after-change")
}, 2500)