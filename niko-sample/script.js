const avatarCharacters = [
    {
        name: "Aang",
        age: 112,
        element: "Air"
    },
    {
        name: "Katara",
        age: 16,
        element: "Water"
    },
    {
        name: "Sokka",
        age: 17,
        element: "Non-bender"
    },
    {
        name: "Zuko",
        age: 17,
        element: "Fire"
    },
    {
        name: "Toph",
        age: 12,
        element: "Earth"
    },
    {
        name: "Iroh",
        age: 60,
        element: "Fire"
    },
    {
        name: "Azula",
        age: 14,
        element: "Fire"
    },
    {
        name: "Mai",
        age: 15,
        element: "Non-bender"
    },
    {
        name: "Ty Lee",
        age: 15,
        element: "Non-bender"
    },
    {
        name: "Suki",
        age: 16,
        element: "Non-bender"
    },
    {
        name: "King Bumi",
        age: 112,
        element: "Earth"
    },
    {
        name: "Ozai",
        age: 43,
        element: "Fire"
    },
    {
        name: "Gran Gran",
        age: 85,
        element: "Water"
    },
    {
        name: "Pakku",
        age: 70,
        element: "Water"
    },
    {
        name: "Jeong Jeong",
        age: 70,
        element: "Fire"
    },
    {
        name: "Hakoda",
        age: 40,
        element: "Non-bender"
    },
    {
        name: "Bato",
        age: 45,
        element: "Non-bender"
    },
    {
        name: "Jet",
        age: 16,
        element: "Non-bender"
    },
    {
        name: "Long Feng",
        age: 55,
        element: "Non-bender"
    },
    {
        name: "Haru",
        age: 16,
        element: "Earth"
    }
];

//Inside the script.js you will find an array that contains objects. Answer these questions into the given HTML element in the brackets! (These are also given in the script file)

// -[ ] a. What kind of 'element' is what Zuko bends? 1 points 
const elementZuko = (avatarCharacters.filter(ch => ch['name'] === "Zuko")).map(ch => ch['element'])

const taskA = document.querySelector('h4#task-a')
taskA.innerText += ' ' + elementZuko

// -[ ] b. Are all characters adults (older than 18 years)? Display, 'Yes.' or 'No.' into the given field. 1 points
const allAdults = avatarCharacters.every(av => av['age'] > 18)

const taskB = document.querySelector('h4#task-b')
taskB.innerText += ' ' + (allAdults? 'Yes' : 'No')

// -[ ] c. List the names of waterbenders! 1 points
let waterbenders = []
avatarCharacters.forEach(ch => {
    if(ch['element'] === 'Water') waterbenders.push(ch['name']);
})

const taskC = document.querySelector('h4#task-c')
taskC.innerText += ' ' + waterbenders.map(ch => ' ' + ch)


// Task 2: Connections (6 points)

// This game is about making 4 groups of words out of 16, groups can be formed with any kind of connections. Here we have fruits in the example task with: 'Watermelon, Lemon, Cherry, Grapes' Most of the game is already written but you still have two little features to add. First, you have to select 4 elements from the table, then you have to press the Check button, and it should add a new card into your game.

// -[ ] A1) Add an event to the table's cell! By clicking on the table's cell, we should check if we clicked on a 'td' or not. If it's a td, set its backgroundColor to lightgreen. 1 points 
// -[ ] A2) After that you should push() the innerText of the e.target to the array named selected. (selected is already initialized for you) 1 points 
// -[ ] A3) Before the addition and coloring, we should check if the selected array's length is 4, and if it is then we should make the selected empty again and make all the td-s backgroundColor to unset. 2 points 
// -[ ] B1) After that, you have to display the selected elements into the card. Create a ul, append the li-s inside of it with the right content, and then append the ul to the element with the id #answers. 2 points

const table = document.querySelector('table')

let selected = []
function handleTableDataClick(){
    if(selected.length == 4) resetSelected();
    if(!selected.includes(this)) selected.push(this)
    this.style.backgroundColor = 'lightgreen'
}
delegate(table, 'click', 'td', handleTableDataClick)

function resetSelected(){
    selected.forEach(td => td.style.backgroundColor = 'unset')
    selected = []
}

const checkButton = document.querySelector('div#buttondiv')
function handleCheckButton(){
    if(selected.length != 4) return;
    
    const ul = document.createElement('ul')
    selected.forEach(td => {
        const li = document.createElement('li')
        li.innerText = td.innerText
        ul.appendChild(li)
    })

    const p = document.createElement("p")
        if(checkElementInQuartets()){
            p.classList.add('good')
            p.innerHTML = 'YEEES! Nice job! 😊'
        } else {
            p.classList.add('bad')
            p.innerHTML = 'Try again 😭'
        }
    ul.append(p)

    const divAnswers = document.querySelector('div#answers')
    divAnswers.appendChild(ul)
    resetSelected()
}
checkButton.addEventListener('click', handleCheckButton)

function delegate(parent, type, selector, handler){
    parent.addEventListener(type, function(event){
        const targetElement = event.target.closest(selector)
        if(this.contains(targetElement)){
            handler.call(targetElement, event)
        }
    });
}


function checkElementInQuartets() {
    const goodies = [
        ["Dog", "Cat", "Hen", "Rabbit"],
        ["Cheese", "Meat", "Rice", "Eggs"],
        ["Watermelon", "Cherry", "Lemon", "Grapes"],
        ["Socks", "Gloves", "Scarf", "Boots"]
    ];
    let isGood = false;
    for (let i = 0; i < goodies.length; i++) {
        const quartet = goodies[i];
        let foundAll = true;
        for (let j = 0; j < selected.length; j++) {
            if (!quartet.includes(selected[j].innerText)) {
                foundAll = false;
                break;
            }
        }
        if (foundAll) {
            isGood = true;
            break;
        }
    }
    return isGood;
}