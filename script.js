

const number_of_cars = 15;
const number_of_spaces = 10;

let waitingList = [];
let goneList = [];
let parkingLot = new Array(number_of_spaces).fill('_');
var intervalId;

let makeModelList = [["Honda","Civic","Accord","Fit","CR-V","Pilot","Odyssey","Ridgeline"],
					["Hyundai","Kona", "Tucson","Santa Fe","Elantra","Sonata","Accent","Veloster"],
					["Kia","Soul","Sorento","Niro","Sedona","Sportage"],
					["Mazda","Mazda3","Mazda6","CX-3","CX-5","CX-9","Miata"],
					["Nissan","Versa","Sentra","Altima","Maxima","Leaf","Rogue","Murano","Armada","Pathfinder"],
					["Ford","Fiesta","Focus","Fusion","Taurus","Escape","Edge","Flex","Explorer","Expedition","F-150","Ranger"], 
					["Chevrolet","Spark","Sonic","Cruze","Malibu","Impala","Volt","Trax","Equinox","Tahoe","Suburban","Colorado","Silverado"],
					["Chrysler","300","Pacifica"],
					["Jeep","Wrangler","Grand Cherokee","Cherokee","Compass","Renegade","Gladiator"],
					["Dodge","Charger","Challenger","Durango","Journey","Grand Caravan"]
					];

let colorList = ["Black","Silver","Red","Yellow","White","Blue","Green","Orange"];




let randomNumber = function(min, max){
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setParkingTime(spot,arr,value){
	setTimeout(function() {
		console.log(`The ${value.color} ${value.year} ${value.make} ${value.model} has left the lot`);
		goneList.push(arr[spot]);
		arr.splice(spot,1,"_");

	},value.timeSpent)
}
let findAndReplace = function(parkingLot,carList){
    var spot = parkingLot.findIndex(e => e=="_");
	if(carList[0] ==undefined){
		console.log('No cars are waiting');
		clearInt();
		return;
	}
	parkingLot[spot] = carList[0];
	console.log(`A ${carList[0].color} ${carList[0].year} ${carList[0].make} ${carList[0].model} has parked in space #${spot}`)
	setParkingTime(spot,parkingLot,parkingLot[spot]);
    carList.shift();
}; 

function Car(make,model,year,color,id,timeSpent) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.id = id;
	this.timeSpent = timeSpent
}
function modelListSelector(listName){}
function carFactory(numberOfCars) {
	for(let i = 0; i < number_of_cars; i++){0
		var color = colorList[Math.floor(Math.random()*colorList.length)];
		var makeList = makeModelList[Math.floor(Math.random()*makeModelList.length)];
		var make = makeList[0];
		var models = makeList[Math.floor(Math.random()*(makeList.length - 1) +1)];
		var year = Math.floor(Math.random()*(2019-2000) +2000);
		var id = Math.floor(Math.random()*(1000) +1);
		var timer = Math.random()*(5000) +1;
		var car = new Car(make,models,year,color,id,timer);
		waitingList.push(car);
	}

}

carFactory(number_of_cars);

let myInterval = setInterval(findAndReplace.bind(null,parkingLot, waitingList), 500);

function clearInt(){
    
	clearInterval(myInterval);
}




