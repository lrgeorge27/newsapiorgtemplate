/* global $ APIKEY*/ /* global notation can be use outside of jQuery, if var are in another js file.*/
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources?",
        data: { category: "technology", country: "us", language: "en", apiKey: APIKEY },
        success: function(data) {
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) { //did not do sources[] because we are running through entire array
                    var source = document.createElement("OPTION");
                    source.setAttribute("value", data.sources[i].id)
                    source.innerHTML = data.sources[i].name;
                    document.getElementById("selection").appendChild(source)



                }
            }
        }

    })
    // .done(function(data) { //method chain
    //     console.log(data);
    //     console.log(data.status)
    // });
    $("#source").submit(function(event) {
        document.getElementById("display").innerHTML = data.sources[i].name
        event.preventDefault();
        alert(document.getElementById("selection").value)
    });

});
