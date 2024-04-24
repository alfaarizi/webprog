// let array = [0, 'This is valid also']

// let dictionary = {"name":"p26-007", "info":"Friendly", "gate":"Destroyed"}

// console.log(array[1])
// console.log(dictionary["info"])

// array.forEach(item => {
//     console.log(item)
// });

// const constant = 42
// constant = 566

const fruits = ["apple", "orange", "pear", "pineapple", "coconut", 2, "mango"]
let fruit = "grape"

// fruits.forEach(fruit => {
//     console.log(fruit)
// })

// for (let fruit of fruits) {
//     console.log("second_" + fruit)
// }

function myFunction(fruit) {
    console.log(fruit)
}

myFunction(fruit)


// console.log(fruits.some(e => typeof(e) === 'number'))
// console.log(fruits.filter(d => typeof(d) === "number") )
// console.log(fruits.map(d => typeof(d)))

let movie = [{
    "title":"Stargate0 - Original Series",
    "length":"45:00",
    "year":1996,
    "director":"Direct Ones",
    "actors":["Richard Dean Anderson", "fdsfsd"]
},{
    "title":"Stargate1 - Original Series",
    "length":"45:00",
    "year":1996,
    "director":"Direct Ones",
    "actors":["Richard Dean Anderson", "fdsfsd"]
},{
    "title":"Stargate2 - Original Series",
    "length":"45:00",
    "year":1996,
    "director":"Direct Ones",
    "actors":["Richard Dean Anderson", "fdsfsd"]
},{
    "title":"Stargate3 - Original Series",
    "length":"45:00",
    "year":1996,
    "director":"Direct Ones",
    "actors":["Richard Dean Anderson", "fdsfsd"]
},{
    "title":"Stargate4 - Original Series",
    "length":"45:00",
    "year":1996,
    "director":"Direct Ones",
    "actors":["Richard Dean Anderson", "fdsfsd"]
}
]

//A) List of movies(title-year)
//B) Mobie with Richard Dean Anderson
//C) Which is the longest movie

movie.forEach(mv => {
    console.log(mv["title"] + "-" + mv["year"])
})



