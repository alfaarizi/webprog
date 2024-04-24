const table = document.querySelector('table')

function createTable(rows, cols){
    let th = document.createElement('th')
    for(let index = 0; index < cols; index++){
        let td = document.createElement('td')
        td.innerText = 'Cell Content' + index
        th.appendChild(td)
    }
    table.appendChild(th)
    for(let i = 0; i < rows-1; i++){
        let tr = document.createElement('tr')
        for(let j = 0; j < cols; j++){
            let td = document.createElement('td')
            td.innerText = 'Cell Content' + (j+rows*i)
            tr.appendChild(td)

        }
    }
}

createTable(5,5)

function handleClick(event){
    this.style.backgroundColor = "yellow"

}

// // delegate(tableHead, 'mouseover', 'th', handleClick)
// // delegate(tableData, 'mouseover', 'td', handleClick)

// function delegate(parent, type, selector, handler) {
//     parent.addEventListener(type, function (event) {
//       const targetElement = event.target.closest(selector);
  
//       if (this.contains(targetElement)) {
//         handler.call(targetElement, event);
//       }
//     });
//   }