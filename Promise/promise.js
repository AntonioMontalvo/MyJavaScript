console.log("Hello Promise");

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful,
    // In this example, we use setTimeout(...) to simulate async code. 

    setTimeout(function() {
        resolve("Success!"); // Yay! Everything went well!
    }, 250);
});

myFirstPromise.then((successMessage) => {
        // successMessage is whatever we passed in the resolve(...) function above.
        // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
        console.log("Yay! " + successMessage)
    })
    .catch(
        // Log the rejection reason
        (reason) => {
            console.log('Handle rejected promise (' + reason + ') here.');
        });


    