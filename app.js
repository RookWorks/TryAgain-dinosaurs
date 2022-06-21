
//getting DOM Elements
const button = document.getElementById("btn");
const formRef = document.getElementById("dino-compare");
const clearScreen = (ref) => {
  ref.remove();
};

const humanNameInput = document.getElementById("name");
let humanName = document.getElementById("name").value;
const humanFeet = document.getElementById("feet");
const humanInches = document.getElementById("inches");
const humanWeight = document.getElementById("weight");
const humanDiet = document.getElementById("diet");


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

var myNewHuman;

function createHuman(){
  let height = parseInt(humanFeet) * 12 + parseInt(humanInches);
    debugger
    myNewHuman = new human(humanName, "human", humanWeight.value, height, humanDiet.value, compareWeight(humanWeight.value));
    function compareWeight(humanWeight){
      let myRandNum = Math.floor(Math.random() * dinoArr.length);
      let myMessage = `You are ${dinoArr[myRandNum].weight - humanWeight} pounds lighter than a ${dinoArr[myRandNum].name}.`;
      return myMessage;
      };
  //   function compareHeight(height){
  //     let myRandNum = Math.floor(Math.random() * dinoArr.length);
  //     let myMessage = `You are ${dinoArr[myRandNum].height - height} pounds shorter than a ${dinoArr[myRandNum].name}.`;
  //     return myMessage;
  //     };
  //   function compareDiet(humanDiet){
  //     let myRandNum = Math.floor(Math.random() * dinoArr.length);
  //     let myMessage = `You're a ${humanDiet} while ${dinoArr[myRandNum].name} is a ${dinoArr[myRandNum].diet}.`;
  //     return myMessage;
  //     };
  // const compareRand = Math.floor(Math.random() * compareArray.length);
  // compareArray = [compareWeight(), compareHeight(), compareDiet()]; 
};
    
    



//Creating Tiles
function populateTiles() {
  clearScreen(formRef);
  dinoArr.splice(4,0,myNewHuman);
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
  // humanData = getHumanData();
})





//It's a button
button.addEventListener("click", () => {
  createHuman()
  populateTiles()
  console.log(humanName)
  // alert(humanName);
})