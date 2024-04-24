const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const scoreDiv = document.querySelector("#score")
const startButton = document.querySelector("button")
const startDiv = document.querySelector("#start")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const CLOUD_DIST = 400
let CLOUD_SPEED = -200

let clouds = []
let plane = {
    x: Number.MIN_SAFE_INTEGER,
    y: canvas.height / 2 - 63,
    width: 200,
    height: 125,
    vy: 0,
    ay: 200
}

let planeImg = new Image()
planeImg.src = "assets/plane.png"

let cloudImg = new Image()
cloudImg.src = "assets/cloud.png"

let lastFrame = performance.now()
let dead = true
let passed = 0

function gameLoop() {
    let now = performance.now()
    let dt = (now - lastFrame) / 1000
    lastFrame = now
    if (!dead) update(dt)
    render()
    requestAnimationFrame(gameLoop)
}

function update(dt) {
    plane.vy += plane.ay * dt
    plane.y += plane.vy * dt

    // do not let the aircraft fly on top of screen :D 
    if (plane.y < 0) {
        plane.y = 0
        plane.vy = 0;
    }

    if (plane.y + plane.height >= canvas.height) gameOver();

    clouds.forEach(cloud => {
        // increase the speed of the clouds based on the number of clouds passed :)
        cloud.x += CLOUD_SPEED * dt * (passed * 0.05 + 1) 
        if (isCollide(cloud)) gameOver();
    })

    clouds = clouds.filter(cloud => {
        if (plane.x > cloud.x + cloud.width){
            passed++ // increase the score by one when the plane passed a cloud :O
            scoreDiv.innerText = passed
            return false
        }
        return cloud.x + cloud.width > 0
    })

    if (clouds.length === 0 || clouds[clouds.length - 1].x < canvas.width - CLOUD_DIST) newCloud();
}

function isCollide(cloud) {
    return (
        plane.x < cloud.x + cloud.width &&
        plane.x + plane.width > cloud.x &&
        plane.y < cloud.y + cloud.height &&
        plane.y + plane.height > cloud.y
    )
} 

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function newCloud() {
    let y = random(63, canvas.height - 63)

    clouds.push(
        {
            x: canvas.width,
            y: y,
            width: 200,
            height: 125
        }
    )
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    clouds.forEach(cloud => {
        ctx.drawImage(cloudImg, cloud.x, cloud.y, cloud.width, cloud.height)
    })

    ctx.drawImage(planeImg, plane.x, plane.y, plane.width, plane.height)
}

function handleFlying(e) {
    if (!dead && ((e.type == "keydown" && e.code == "Space") || (e.type == "touchstart"))) {
        e.preventDefault()
        plane.vy = -200
    }
}

function handleStart(e) {
    e.preventDefault()
    if (dead) {
        plane.x = 0
        plane.y = canvas.height / 2 - 63
        plane.vy = 0
        clouds = []
        newCloud()
        dead = false
        passed = 0
        scoreDiv.innerText = passed
        startDiv.style.display = "none"
    }
}

function gameOver(){
    dead = true;
    startDiv.style.display = 'block'
}

document.addEventListener("keydown", handleFlying)
document.addEventListener("touchstart", handleFlying)
startButton.addEventListener("click", handleStart)

gameLoop()