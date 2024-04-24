const numbers = [5, 2, 15, -3, 6, -8, -2];

const matrix = [
  [1, 0, 3],
  [0, 2, 0],
  [4, 5, 6],
  [0, 0, 0],
]

const searchResults = {
  "Search": [
    {
      "Title": "The Hobbit: An Unexpected Journey",
      "Year": "2012",
      "imdbID": "tt0903624",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Desolation of Smaug",
      "Year": "2013",
      "imdbID": "tt1170358",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Battle of the Five Armies",
      "Year": "2014",
      "imdbID": "tt2310332",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "1977",
      "imdbID": "tt0077687",
      "Type": "movie"
    },
    {
      "Title": "Lego the Hobbit: The Video Game",
      "Year": "2014",
      "imdbID": "tt3584562",
      "Type": "game"
    },
    {
      "Title": "The Hobbit",
      "Year": "1966",
      "imdbID": "tt1686804",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit",
      "Year": "2003",
      "imdbID": "tt0395578",
      "Type": "game"
    },
    {
      "Title": "A Day in the Life of a Hobbit",
      "Year": "2002",
      "imdbID": "tt0473467",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: An Unexpected Journey - The Company of Thorin",
      "Year": "2013",
      "imdbID": "tt3345514",
      "Type": "movie"
    },
    {
      "Title": "The Hobbit: The Swedolation of Smaug",
      "Year": "2014",
      "imdbID": "tt4171362",
      "Type": "movie"
    }
  ],
  "totalResults": "51",
  "Response": "True"
}

// a. Assign (map) its square value to each item in numbers array. (0.5 points)
let squared = numbers.map(num => num**2)
console.log(squared)

// b. Find the smallest element of the numbers array! (You may use the Infinity value in JavaScript.) (0.5 points)
let smallestNumber = Infinity
numbers.forEach(num => {
    if(num < smallestNumber) smallestNumber = num
})
console.log(smallestNumber)


// c. Give that row index of the matrix, which row is full of 0 value! If there is no such row, write -1 to the console! (1 point)
function findZeroRows(matrix){
    for(let i = 0; i < matrix.length; i++){
        if(sum(matrix[i]) === 0) return i + 1;
    }
    return -1;
}

function sum(ls) { 
    let total = 0
    ls.forEach(num => total += num)
    return total
}

let rowID = findZeroRows(matrix)
console.log(rowID)


// d. Give those IMDB identifiers (imdbID) from the searchResults lis, that belong to movies that are post-2010 (year field) and their type (Type) is movie. (1 point)
let filtered = ( searchResults["Search"].filter(sr => parseInt(sr["Year"]) > 2010 && sr["Type"] === "movie" ) ).map(sr => sr["imdbID"])
console.log(filtered)

