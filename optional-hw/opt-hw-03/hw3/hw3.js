// Muhammad Al Farizi
// Neptun: ocswom

// Retrieve necessary data from list of episodes
let data = []
episodes.forEach(ep => {
    data.push([ep["name"], ep["number"], ep["image"]])
})

// helper functions
function retrieveEpisodeName(pos) {return data[pos][0]};
function retrieveEpisodeNumber(pos) {return data[pos][1];}
function retrieveEpisodeImage(pos, type) {return data[pos][2][type];}

// create table
const table = document.querySelector('table')
function createTable(rows, cols){
    let episodeCnt = 0;
    for(let row = 0; row < rows; row++){
        let tr = document.createElement('tr')
        for(let col = 0; col < cols; col++){
            let td = document.createElement('td')

            let figure = document.createElement('figure')
            figure.style.margin = '0'
            
            let img = document.createElement('img')
            img.src = retrieveEpisodeImage(episodeCnt, "medium")

            let figcaption = document.createElement('figcaption')
            figcaption.innerText = retrieveEpisodeNumber(episodeCnt) + " - " + retrieveEpisodeName(episodeCnt)

            figure.appendChild(img)
            figure.appendChild(figcaption)
            td.appendChild(figure)
            tr.appendChild(td)
            episodeCnt++
        }
        table.appendChild(tr)
    }
}

// handle mouse click event
function handleMouseClick(){
    let img = this.querySelector('img')
    let figcaption = this.querySelector('figcaption')
    img.className = 'viewed'
    figcaption.className = 'viewedCaption'
}

// delegate function:)
function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);
  
    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}


// SOLVE THE TASK
createTable(5, 4)
delegate(table,'click','td',handleMouseClick)