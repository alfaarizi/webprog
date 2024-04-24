// 1. Task
const greetingButton = document.querySelector('button#greeting')
const greetingSpan = document.querySelector('span#hello')

function handleGreetingButtonClick(){
    greetingButton.style.display = "none"
    greetingSpan.innerHTML = "Welcome on my Course!"
}

greetingButton.addEventListener('click', handleGreetingButtonClick)

// 2. Task
const target = Math.floor(Math.random()*100)
console.log(target)

const guessInput = document.querySelector('input#guess')
const guessButton = document.querySelector('button#guess')
const guessSpan = document.querySelector('span#guess')

function handleGuessButtonClick(){
    let guess = parseInt(guessInput.value)
    
    if (guess == target) guessSpan.innerHTML = "You find it out!"
    else if (guess > target) guessSpan.innerHTML = "Lower!"
    else guessSpan.innerHTML = "Greater!"

}

guessButton.addEventListener('click', handleGuessButtonClick)

// 3. Task
const urlInput = document.querySelector('input#url')
const showButton = document.querySelector('button#showimage')
const imageOutput = document.querySelector('img')

function handleShowButtonClick(){
    imageOutput.src = urlInput.value
}

showButton.addEventListener('click', handleShowButtonClick)

// 4. Task
const links = document.querySelectorAll('a[href]')
const ul = document.querySelector('ul')

links.forEach(function(link) {
    let li = document.createElement('li')
    li.innerHTML = link.href
    ul.appendChild(li)
})

// 5. Task
const withdrawButton = document.querySelector('button#withdraw')
const withdrawInput = document.querySelector('input#money')
const balanceSpan = document.querySelector('span#balance')

function handleWithdrawButtonClick(){
    const balance = parseInt(balanceSpan.innerHTML) - parseInt(withdrawInput.value)
    balanceSpan.innerText = balance
}

withdrawButton.addEventListener('click', handleWithdrawButtonClick)