const outputSpan = document.querySelector('span')
outputSpan.innerText = "Please click on the screen."

let last  = null
let lastTime = null

function handleClick(event){
    if(last !== null){
        let timeDist = event.timeStamp - last.timeStamp
        let dist = ( (event.screenX - last.screenX) ** 2 + (event.screenY - last.screenY) ** 2 ) ** (1/2)
        outputSpan.innerText = "Elapsed Time: " + timeDist + " ms, and distance: " + dist + " pixels"
    }else{
        outputSpan.innerText = "Please click again on the screen"
        last = event
        tastTime = event.timeStamp
    }
    last = event
    lastTime = performance.now()
}

document.addEventListener('click', handleClick)
