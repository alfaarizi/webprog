// Retrieve the sign id from the image
function retrieveCurrentSignID(currentSignImg){
    const filename = currentSignImg.src.split('/').pop()
    return parseInt(filename.split('.png')[0].split('sign')[1])
}

let currentSignImg = document.querySelector('img#currentSign')
let currentSignID = retrieveCurrentSignID(currentSignImg)

// Handle increase and decrease button
const MAXVALUE = 39
const MINVALUE = 1

const increaseButton = document.querySelector('button#inc')
const decreaseButton = document.querySelector('button#dec')

function handleIncreaseButtonClick(){     
    if (currentSignID < MAXVALUE) currentSignID++
    handleDisableButton()
    currentSignImg.src = `assets/sign${currentSignID}.png`
}
function handleDecreaseButtonClick(){ 
    if (currentSignID > MINVALUE) currentSignID--
    handleDisableButton()
    currentSignImg.src = `assets/sign${currentSignID}.png`
}

function handleDisableButton(){
    increaseButton.disabled = (currentSignID === MAXVALUE)
    decreaseButton.disabled = (currentSignID === MINVALUE)
}

increaseButton.addEventListener('click', handleIncreaseButtonClick)
decreaseButton.addEventListener('click', handleDecreaseButtonClick)

// Handle currentSign img click
let coverImg = document.querySelector('img.cover')
coverImg.src = `assets/sign${currentSignID}.png` // initial coverImg

function handleCurrentSignImgClick(){
    coverImg.src = `assets/sign${currentSignID}.png`
}

currentSignImg.addEventListener('click', handleCurrentSignImgClick)


// // Handle button click and hold event (Optional)
// // Note: I decided to omit this part, because it doesn't work beautifully

// let timeOutID;
// const INTERVAL = 275;

// increaseButton.addEventListener('mousedown', handleIncreaseButtonHold)
// increaseButton.addEventListener('mouseup', clearHoldTimer)
// increaseButton.addEventListener('mouseleave', clearHoldTimer)

// decreaseButton.addEventListener('mousedown', handleDecreaseButtonHold)
// decreaseButton.addEventListener('mouseup', clearHoldTimer)
// decreaseButton.addEventListener('mouseleave', clearHoldTimer)

// function handleIncreaseButtonHold(){
//     handleIncreaseButtonClick()
//     timeOutID = setTimeout(handleIncreaseButtonHold, INTERVAL)
// }

// function handleDecreaseButtonHold(){
//     handleDecreaseButtonClick()
//     timeOutID = setTimeout(handleDecreaseButtonHold, INTERVAL)
// }

// function clearHoldTimer(){
//     clearTimeout(timeOutID)
// }