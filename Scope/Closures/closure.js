console.log("Hello Closures");

function foo() {
    var a = 2;

    function bar() {
        console.log("var a = " + a);
    }
    return bar; // < - pass bar as a value, we return the function object itself that bar references.
}

var baz = foo(); // foo is assigned to baz

baz(); //baz is invoked which invokes foo and bar is returned

///////////////////////////////////////////////////
//An example to ilustrate closure using a for loop/
///////////////////////////////////////////////////

for (var i = 1; i <= 5; i++) { //only when i is 6 the iteration stops
    setTimeout(function timer() { //setTimeout has timer as a callback
        console.log("This is clearly not what we want, because i = " + i ); //i is 6
    }, i * 1000);
}

/////////////////////////////////////////////////////////////
//One solution is to use an IIFE to create new closure scope/
/////////////////////////////////////////////////////////////

for (var i = 1; i <= 5; i++) { //only when i is 6 the iteration stops
    (function() {
        var j = i;
        setTimeout(function timer() { //setTimeout has timer as a callback
            console.log("Now, we are happy, Iteration number " + j); //i is 6
        }, j * 1000);
    })();
}

///////////////////
//The let solution/
///////////////////

for (let i = 1; i <= 5; i++) { //only when i is 6 the iteration stops
    setTimeout(function timer() { //setTimeout has timer as a callback
        console.log("This is the easiest way, i = " + i ); //i is 6
    }, i * 1000);
}


