// Given three range sliders on the web page, which can help you to give the hue, saturation and lightness value of a color. Technical help: in CSS you can give a color in this format: hsl(120, 60%, 70%).


// a. By clicking the button write the generated HSL CSS color code to the input box right after "HSL String" text. (1 point)
let hue = document.querySelector('input[type="range"][min="0"][max="360"]')
let satur = document.querySelector('input[type="range"][min="0"][max="100"]')
let light = document.querySelector('input#light')

const hslOutput = document.querySelector('input[type="text"][readonly]')

const setColorButton = document.querySelector('button')
setColorButton.addEventListener('click', handleBackgroundColorClickInput)

const sliders = document.querySelectorAll('input[type="range"]')
sliders.forEach(slider => {
    slider.addEventListener('input', handleBackgroundColorClickInput)
})

function handleBackgroundColorClickInput(){
    let hslValue = `hsl(${hue.value}, ${satur.value}%, ${light.value}%)`
    hslOutput.value = hslValue
    document.body.style.backgroundColor = hslValue
}

// b. Clicking the button set the background color of the page according to the selected values. (1 point)

// c. Change the background color immediately by moving the sliders. Technical help: use the input event of the sliders! (1 point)