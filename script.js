const number_of_cars = 50;
const number_of_spaces = 10;

let waitingList = [];
let parkingLot = new Array(number_of_spaces).fill('_');


let makelist = ["Honda","Hyundai","Kia","Mazda","Nissan","Ford", "Chevrolet","Chrysler","Jeep","Dodge"];

let colorList = ["Black","Silver","Red","Yellow","White","Blue","Green","Orange"];

let hondaList = ["Civic","Accord","Fit","CR-V","Pilot","Odyssey","Ridgeline"];
let hyndaiList = ["Kona", "Tucson","Santa Fe","Elantra","Sonata","Accent","Veloster"];
let kiaList = ["Soul","Sorento","Niro","Sedona","Sportage"];
let mazdaList = ["Mazda3","Mazda6","CX-3","CX-5","CX-9","Miata"];
let nissanList = ["Versa","Sentra","Altima","Maxima","Leaf","Rogue","Murano","Armada","Pathfinder"];
let fordList = ["Fiesta","Focus","Fusion","Taurus","Escape","Edge","Flex","Explorer","Expedition","F-150","Ranger"];
let chevroletList = ["Spark","Sonic","Cruze","Malibu","Impala","Volt","Trax","Equinox","Tahoe","Suburban","Colorado","Silverado"];
let chryslerList = ["300","Pacifica"];
let jeepList = ["Wrangler","Grand Cherokee","Cherokee","Compass","Renegade","Gladiator"];
let dodgeList = ["Charger","Challenger","Durango","Journey","Grand Caravan"];


let randomNumber = function(min, max){
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Car(make,model,year,color,id) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.id = id;
}
function carFactory(numberOfCars) {
	for(let i = 0; i < number_of_cars; i++)
	let color = colorList[Math.floor(Math.random()*colorList.length)];

}

console.log(parkingLot)

console.log(colorList[Math.floor(Math.random()*colorList.length)])