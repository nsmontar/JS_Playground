function myDisplay(value) {
      document.getElementById("demo").innerHTML = value;
}

function getFile(myCallback) {
      fetch('/mycar.html', {
            method: 'GET',
        }).then(function(res) {
            return res.text();
        }).then(function(data) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, "text/html");
            var innerHTML = doc.getElementsByTagName('body')[0].innerHTML;
            myCallback(innerHTML);
        }).catch(function () {
            myCallback("Error!")
        });
}

getFile(myDisplay);