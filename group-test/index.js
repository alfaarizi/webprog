const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');
const task4 = document.querySelector('#task4');

console.log(cities);
console.log(connections);

// Work here...

// - **a)** (2 points) Write the current name and country of the city formerly known as Constantinople into the element with ID task1.
const Constantinople = cities.filter(ct => ct.city === 'Constantinople')[0]
task1.innerText = `${Constantinople['today']}, ${Constantinople['country']}`

// - **b)** (2 points) List all the cities inside the rectangle bounded by points (x: 30, y: 40) and (x: 60, y: 60) into the element with ID task2.
const insideRectangleCities = (cities.filter(ct => 30 < ct.x && ct.x < 60 && 40 < ct.y && ct.y < 60)).map(ct => ct.today)
task2.innerText = insideRectangleCities.map(ct => ' ' + ct)

// - **c)** (3 points) Write whether there is (true or false) a connection that leads to Budapest into the element with ID task3.
const isConnectedToBudapest = connections.some(cn => cn.toCity === 'Budapest')
task3.innerText = isConnectedToBudapest

// - **d)** (3 points) Write the average number of elements in green connections into the element with ID task4.
let totalElement = 0
let cnt = 0
const GreenConnections = (connections.filter(cn => cn.color === 'green')).forEach(cn => {
    totalElement += cn['elements'].length
    cnt += 1
})
const averageGreenConnections = totalElement / cnt
task4.innerText = averageGreenConnections