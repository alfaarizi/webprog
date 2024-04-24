// A contact list is provided on the page in the following HTML structure. Each contact has three buttons that reveal the corresponding information from the contact data. Solve the following tasks using a single event handler.



const div = document.querySelector('div#contacts')


function handleButtonClick(){
    // a. Write the label and the the value of the data-toggle attribute of the clicked button to the console! (1 point)
    console.log( `${this.getAttribute("data-toggle")}: ${this.innerText}`)

    // b. Clicking the button write the contact name to the console. If there was no button click, do nothing! (1 point)
    const pName = this.closest('section').querySelector('p.name')
    console.log(pName.innerText)

    // c. By clicking any of the button, make the email field of the contact visible. (1 point)
    const pEmail = this.closest('section').querySelector('p.email')
    pEmail.removeAttribute("hidden")

    // d. By clicking a button make that field visible that is specified in the data-toggle attribute of the button. (1 point)
    const selectedButton = this.getAttribute( "data-toggle")
    
    this.closest('section').querySelector('p.' + selectedButton).removeAttribute('hidden')

}


delegate(div, 'click', 'button', handleButtonClick)

function delegate(parent, type, selector, handler){
    parent.addEventListener(type, function(event){
        const targetElement = event.target.closest(selector)
        if(this.contains(targetElement)){
            handler.call(targetElement, event)
        }
    });
}