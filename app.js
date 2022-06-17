
//getting DOM Elements
const button = document.getElementById("btn");
const formRef = document.getElementById("dino-compare");
const clearScreen = (ref) => {
  ref.remove();
};

const humanNameInput = document.getElementById("name");
let humanName = document.getElementById("name").value;
const humanFeet = document.getElementById("feet").value;
const humanInches = document.getElementById("inches").value;
const humanWeight = document.getElementById("weight").value;
const humanDiet = document.getElementById("diet").value;


//Dinosaur Constructor
function dinosaur(name, species, weight, height, diet, where, when, fact) {
  this.name = name;
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
};


//Human Constructor
function human(name, species, weight, height, diet, fact) {
  this.species = species;
  this.fact = fact;
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
};


let compareWeight;

//Pulling dino info from json
var dinoArr = [];
fetch("dino.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.Dinos.forEach(dino =>{
      let dinoObj = new dinosaur(dino.name, dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)
      dinoArr.push(dinoObj)
    })

  });




//Creating Human DOM Elements
function getHumanData() {
  return (function () {
    let height = parseInt(humanFeet) * 12 + parseInt(humanInches);
    return new human(humanName, "human", humanWeight, height, humanDiet, dinoArr.weight);
  })();
};







let humanData = getHumanData();  

//Creating Tiles
function populateTiles() {
  clearScreen(formRef);
  dinoArr.splice(4,0,humanData);
  for (let i = 0; i < dinoArr.length; i++){
    const tile = document.createElement("div")
    tile.className = "grid-item"
    tile.innerHTML = `<h2>${dinoArr[i].name}</h2> <img src="images/${dinoArr[i].species.toLowerCase()}.png"/> <h3>${dinoArr[i].fact}</h3>`
    document.querySelector("#grid").appendChild(tile)
  };

};




humanNameInput.addEventListener("change", (event) =>{
  console.log(event.target.value);
  humanName = event.target.value;
  humanData = getHumanData();
  
  function compareWeight(){
    // let myRandNum = Math.floor(Math.random() * dinoArr.length);
    // // console.log(dinoArr[myRandNum])
    // let myMessage = `You are ${dinoArr[myRandNum].weight - humanData.weight} pounds lighter than a ${dinoArr[myRandNum].name}`;
    let myMessage = dinoArr;
    return myMessage;
    // console.log(dinoArr.length)
    };

    compareWeight = compareWeight();

})




//It's a button
button.addEventListener("click", () => {
  populateTiles()
  console.log(humanName)
  // alert(humanName);
});



































//Dead Code, might use later
// let humanArr = [];
// fetch(humanData)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.human.forEach(human =>{
//       let humanObj = new human(human.name, human.species, human.weight, human.height, human.diet, human.where, human.when, human.fact)
//       humanArr.push(humanObj)
//     })
//   }); 
// console.log(humanArr);

// function populateHumanTiles() {
//   let humanData = getHumanData();
//   clearScreen(formRef);
//   dinoArr.splice(4,0,humanData);
//   for (let i = 0; i < dinoArr.length; i++){
//     const tile = document.createElement("div")
//     tile.className = "grid-item:nth-child(5)"
//     tile.innerHTML = `<h2>${humanName}</h2><p><h2>Human</h2></p> <img src="/images/human.png"/> <h3>You are ${human.fact} smaller than ${dinoArr[i].species}.</h3>`
//     document.querySelector("#grid").appendChild(tile)
//     console.log(humanData);
//   };
// };

