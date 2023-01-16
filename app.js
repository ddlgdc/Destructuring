let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // returns 8
console.log(yearNeptuneDiscovered); // returns 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
let {numPlanets, ...discoveryYears} = planetFacts;
    console.log(discoveryYears);
  // returns {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // returns Maya
getUserData({firstName: "Melissa"}) // returns Marisa
getUserData({}) // returns Chi



let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
console.log(raindrops); // Raindrops on roses
console.log(whiskers); // Whiskers on kittens
console.log(aFewOfMyFavoriteThings); 
// returns ["Bright"]