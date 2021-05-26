function myDisplayer(value) {
    document.getElementById("demo").innerHTML = value;
}


// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open("GET", "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(req.responseText)
//         }
//         else {
//             myCallback("Error: " + req.status)
//         }
//     }
//     req.send();
// }

// getFile(myDisplayer)



// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("<h1>I love JS!</h1>") }, 3000)
// }).then( myDisplayer )


// let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open("GET", "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myResolve(req.responseText)
//         }
//         else {
//             myReject("Error: " + req.status)
//         }
//     }
//     req.send();
// })

// myPromise.then(myDisplayer, myDisplayer)


async function myFunction() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("<h1>I love JS!</h1>"); }, 3000 )
    });
    myDisplayer(await myPromise);
}

myFunction();