/* global $*/ /* global notation can be use outside of jQuery, if var are in another js file.*/
$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources?",
        data: { category: "business", country: "us", language: "en", apiKey: "81a20d8907024bec97102b55c17d9742" },
        success: function(data) {
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) { //did not do sources[] because we are running through entire array
                    var source = document.createElement("OPTION");
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
});
