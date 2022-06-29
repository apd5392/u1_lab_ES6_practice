//PART 1
// const evens = [2, 4, 6, 8];

// const moreEvens = [...evens, 10, 12, 14, 206];

// const oddNums = [1, 3, 5, 9];

// const moreOdds = [...oddNums, 13, 15, 19, 407];

// const numbers = [...moreEvens, ...moreOdds, 42, 64, 24];

// console.log(numbers);

// const nfcEast = ["Eages", "NY Giants", "Cowboys", "Commanders"];
// const nfcSouth = ["Falcons", "Panthers", "Saints", "Buccaneers"];
// const nfcNorth = ["Bears", "Vikings", "Lions", "Packers"];
// const nfcWest = ["Cardinals", "Rams", "49ers", "SeaHawks"];
// const nfcDivision = [...nfcEast, ...nfcSouth, ...nfcNorth, ...nfcWest];

// console.log(nfcDivision);

//PART 2
//1. Define an object faveFoods that has keys representing three of your favorite foods and the values should be the restaurant or locale where they are from.
// 2. Now make another object and do the same thing but this time ask your neighbor what their three favorite foods are. Literally. Go next door and ask them (jk that might not be safe, just pretend you know your neighbor - her name is Janet. very kind. lets you know that it is your other neighbor that is the smoker, not her. ok, Janet, we believe you.).
// 3. Using the spread operator, build a final object allFoods with the items from faveFoods and janetFaveFoods together.

// const faveFoods = {
//     burger: {restaurant: 'Mcdonalds'},
//     hotDog: {restaurant: 'WeenieHutJunior'},
//     cheeseSteak: {restaurant: 'Ishkabibles'}
// }

//  const janetFaveFoods ={
//     Ramen: {restaurant: 'Ichiraku Ramen'},
//     KrabbyPatty: {restaurant: 'Krusty Krab'},
//     food6: {restaurant: 'Blah'}
//  }

//  const bothFoods = {
//     ...faveFoods,
//     ...janetFaveFoods
//  }

// console.log(bothFoods)

//PART 3
// 1. Define yourself in a javascript Object with three keys: name, age, and hometown.
// 2. Use the destructuring syntax to extract all three keys into variables. Log all three variables.
// 3. Now we are going to give you a pet. Use destructuring to do the following: 1) add a pet object to your person, 2) define three variables (age, breed, name) outside of the object and 3) add those variables to your pet.
// 4. Log the most important thing about you: your pet's name.

const person = {
  fullName: "Adama Doumbia",
  age: 24,
  homeTown: "Philadelphia",
};

const pet = {
  petName: "Apollo",
  breed: "Domestic Medium Hair",
  petAge: 1,
};

// const { fullName, age, homeTown } = person;

const newPerson = {...person, ...pet}

const {fullName, age, homeTown, petName} = newPerson;

console.log(fullName)
console.log(age)
console.log(homeTown)
console.log(petName)
