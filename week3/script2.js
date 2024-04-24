const ul = document.querySelector('p')
let firstLi = null

function handleClick(s){
    if(!s.target.matches('li')) return;
    
    if(firstLi !== null){
        let secondLi = s.target;
        [firstLi.innerText, secondLi.innerText] = [secondLi.innerText, firstLi.innerText]
        firstLi = null
    }else{
        firstLi = s.target
    }

}

ul.addEventListener('click', handleClick)