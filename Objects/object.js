console.log("Hello Objects");

///////////////////////////////////////////////////////////////////////////
//Creating an object as a Direct Instance of JavaScript's built-in Object//
///////////////////////////////////////////////////////////////////////////

//an instance of Object
myFirstObject = new Object();
//add a property 
myFirstObject.description = "I'm Antonio's first object. A Direct Instance of JavaScript's built-in object named Object.";
//add a method
myFirstObject.activateAlert = function() {
    alert(this.description);
}

///////////////////////////////////////////////
//A JSON Object containing all posible values//
///////////////////////////////////////////////

var instrument = {
    "name": "Acoustic Guitar",
    "commercial name": "Martin Co.",
    "model number": "DC-15M",
    "price": 1775,
    "love it": true,
    "construction": ["mahogany", "rich satin finish"],
    "setNewPrice": function(newPrice) {
        this.price = newPrice;
    },
    "other colors": null,
    "Martin 15 series": [
        { "model number": "00-15", "price": 1779 },
        { "model number": "000-15 M", "price": 1799 },
        { "model number": "000-15 SM", "price": 1775 },
        { "model number": "000-15 Burst", "price": 2049 },
        { "model number": "D15 Busrt", "price": 2049 },
        { "model number": "0MC-15 ME", "price": 2249 },
        { "model number": "DC-15 ME", "price": 2249 },
        { "model number": "000-15 ME", "price": 1799 },
        { "model number": "GPC-15 ME", "price": 2249 }
    ]
}

document.getElementById("name").append(instrument.name);
document.getElementById("commercial").append(instrument["commercial name"]);
document.getElementById("price").append(instrument.price);
document.getElementById("boolean").append(instrument["love it"]);
document.getElementById("material").append(instrument.construction[0]);


var newPrice = prompt(" Manager. Set new price for your Martin DC-15M");
instrument.setNewPrice(newPrice);

document.getElementById("price").innerHTML = "my new price is $ " + instrument.price;

for (var i = 0; i < instrument["Martin 15 series"].length; i++) {
    document.getElementById("other").append(" model " + instrument["Martin 15 series"][i]["model number"] + " for $" + instrument["Martin 15 series"][i]["price"] + ".");
}

var serialized = JSON.stringify(instrument);
document.getElementById("JSONString").append(serialized);
var backToNormalJSON = JSON.parse(serialized);
document.getElementById("JSONParse").append(backToNormalJSON);
////////////////////////////////
//USING A CONSTRUCTOR FUNCTION//
////////////////////////////////

//the constructor function. It is convention to name constructor function starting with Uppercase letter.
function Album(artist, album, year) {
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.showAlbum = function() {
        alert(this.album + " was recorded by " + this.artist + " in " + this.year);
    }
}
//instances of the constructor
var u2 = new Album("U2", "The Josua Tree", 1987);
var coldplay = new Album("Coldplay", "A rush of blood to the head", 2001);
//call a method
u2.showAlbum();
coldplay.showAlbum();

////////////////////////////////////
//EXTENDING OBJECTS WITH PROTOTYPE//
////////////////////////////////////

//a classic example of a contructor function. 
function Vehicle(manufacturer, model, year, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.color = color;
    this.consoleVehicle = function() {
        console.log("A " + this.manufacturer + " " + this.model + ", " + this.year);
    }
}

myCar = new Vehicle("Dodge", "Durango", 2014, "grey");
myCar.consoleVehicle();
lastCar = new Vehicle("Volkswagen", "CC", 2009, "black");
lastCar.consoleVehicle();

//extending the constructor. Notice the use of prototype to create a new property "price" and a method "updatePrice".

Vehicle.prototype.price = undefined;
console.log("A this point the price property for the Car constructor is " + Vehicle.price);
myCar.price = 3000;
console.log("Now I've hard coded the price for my car to be $" + myCar.price);

Vehicle.prototype.updatePrice = function() {
        var carsNewPrice = document.getElementById("price_tag").value;
        document.getElementById("newPrice").innerHTML = "";
        document.getElementById("price_tag").value = "";
        document.getElementById("newPrice").append("Your updated new price $" + carsNewPrice);
        if (/\D/.test(carsNewPrice)) {
            alert("Please only enter numeric characters for your new MSRP!");
        }
    }
    /////////////////////////////////////
    //OBJECT INHERITANCE WITH PROTOTYPE//
    /////////////////////////////////////
//the Musical Instrument constructor
function MusicalInstrument(name, material, artist) {
    this.name = name;
    this.material = material;
    this.artist = artist;
    this.consoleInstrumnet = function() {
        console.log("This " + this.name + " its made of " + this.material + ".  " + this.artist + " plays it.");
    }
}
//let's create an instance on Musical Instrument
var myInstrument = new MusicalInstrument();
myInstrument.name = "guitar";
myInstrument.material = "rosewood";
myInstrument.artisit = "Van Halen";
console.log(myInstrument); 
//let's inherit from the Vehicle constructor all properties and methods.
MusicalInstrument.prototype = new Vehicle();
//let's use our inherited properties
myInstrument.price = 1000;
myInstrument.manufacturer = "Fender";
myInstrument.model = "Telecaster";
myInstrument.year = "2017";
console.log(myInstrument);


