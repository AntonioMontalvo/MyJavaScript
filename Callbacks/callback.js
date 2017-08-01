//////////////////////
//OUR FIRST CALLBACK//
//////////////////////

//hide the element
document.getElementById("codeImage").style.display = "none";

document.getElementById("callback1").onclick = function() {
    showMessage();
}

function showMessage() {
    //show the element
    document.getElementById("codeImage").style.display = "block";
    alert("I'm an alert. When you clicked on the button, the showMessage function called me, and the .onclick method called the showMessage function. It also made an image with the code be visible.");
}

/////////////////
//FRUIT EXAMPLE//
/////////////////

var sum = 0;

//
function clickedBox(boxId) {
    var grabElement = document.getElementById(boxId);
    print_names(grabElement);
    showTotal();
}

function print_names(...element) {
    for (let i = 0; i < element.length; i++) {
        var elementValue = element[i].dataset.value;
        console.log(element[i]);
        sum += parseFloat(elementValue);
        console.log(sum.toFixed(2));
    }
}

function showTotal() {
    var forTotal = document.createElement("div");
    forTotal.setAttribute("id", "betterLookingTotal");
    var newContent = document.createTextNode(sum);
    forTotal.appendChild(newContent); //add the text node to the newly created div. 
    document.getElementById("fruits").innerHTML = "";
    document.getElementById("fruits").appendChild(forTotal);
}

/////////////////////
//A SIMPLE CALLBACK//
/////////////////////
console.log("//////////////////////////");
console.log("A simple calback");
console.log("//////////////////////////");
//This two examples below are exactly the same. We are passing the function definition, not the function call. This prevents the callback from being executed immediately, which is not the idea behind the callbacks
function fullNameType1(firstName, lastName, callback) {
	console.log("This is one way to do it");
    console.log("My name is " + firstName + " " + lastName);
    callback(lastName);
}

var greeting = function(ln) {
    console.log('Welcome Mr. ' + ln);
};

fullNameType1("Antonio", "Montalvo", greeting);

//The callback can be an existing function as shown in the preceding example, or it can be an anonymous function, which we create when we call the higher-order function, as shown in the following example:
function fullNameType2(firstName, lastName, callback) {
	console.log("This is another way to do it");
    console.log("My name is " + firstName + " " + lastName);
    if(callback && typeof(callback) === "function"){
    	callback(lastName);
    }
}

fullNameType2("Antonio", "Montalvo", function(ln) { console.log('Welcome Mr. ' + ln); });

/////////////////////////
//DATE AND TIME EXAMPLE//
/////////////////////////
console.log("//////////////////////////");
console.log("Date and Time example");
console.log("//////////////////////////");
function publish(message, author, callback){   // Generic function with common data
  console.log(message);
  var date = new Date();

  callback(author, date);
}

function sentAt(author, time){   // Callback function with specific data
  var sendTime = time.toLocaleTimeString();
  console.log("Message sent from " + author + " at " + sendTime);
}

function articles(author, date){   // Callback function with specific data
  var pubDate = date.toDateString();
  console.log("Written by " + author);
  console.log("Published " + pubDate);
}

publish("How are you?", "Antonio's Computer", sentAt);

publish("This is a prototypical callback", "Antonio", articles);

//////////////////////////
//HAVE BREAKFAST EXAMPLE//
//////////////////////////
console.log("//////////////////////////");
console.log("The Breakfast example");
console.log("//////////////////////////");

function haveBreakfast (food, drink, callback){
	console.log("This morning I want a " + food + " and" + drink + " for breakfast.")
	if( callback && typeof(callback) === "function"){
		callback();
	}
}

haveBreakfast("croisant", "coffee", function (){
	console.log("Now that I understand callbacks, I can use Node.js")
})









