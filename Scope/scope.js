console.log("Hello Scope");

/////////////////////////
//Scope from a Function//
/////////////////////////

function outerScope(a) {
    var b = a + 2;

    function innerScope(c) {
        console.log(a, b, c);
    }
    innerScope(b * 3);
}

outerScope(2); // 2, 4, 12


function doSomething(a) { // scope of doSomething() keeps things private
    function doSomethingElse(a) { // doSomethingElse() is not accessible outside of doSomething()
        return a + 2;
    }
    var b; // b is not accessible outside of doSomething()

    b = a + doSomethingElse(a + 2);

    console.log("This is the result of doSomething: " + b * 3);
}

doSomething(2); //the only thing you can do is invoke this function and access a as an argument.

///////////////////////////////
//A super simple IIFE example//
///////////////////////////////

(function proof() {
    var proof = "Look, I'm proof that the IIFE works. I've been immediately invoked";
    console.log(proof);
})();

/////////////////////
//Scope from Blocks//
/////////////////////

//a great example about Scope from Blocks 

try {
    callMeIfYouCan(); // I've tried but...
} catch(error) {
    // statements
    console.log("This is the error from the try/catch " + error); // It says callMeIfYouCan is not defined. 
    // so error in catch works.  
}
console.log(error);//err what? Uncaught ReferenceError: error is not defined




