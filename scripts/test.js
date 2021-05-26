function myDisplay(value) {
      document.getElementById("demo").innerHTML = value;
}

function getFile(myCallback) {
      fetch('mycar.html').then(function(response) {
            return response.text();
      }).then(function(html) {
            myCallback(html);
      }).catch(function(error) {
            console.log('Something went wrong. ', error);
      });
}


function getFile2(myCallback) {
      let request = new XMLHttpRequest();
      request.open("GET", "mycar.html");
      request.onload = function() {
            if(request.status == 200) {
                  myCallback(request.responseText);
            } else {
                  myCallback("Error: " + request.status)
            }
      }
      request.send();
}


getFile(myDisplay);