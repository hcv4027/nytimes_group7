// Variables for the queryURL
var API_KEY = "e9e4058210b14f91ad093cefd6a7661f";

$("#search-confirm").on("click", function (event) {

    event.preventDefault();

    var search = $("#search-confirm").val();

    // The URL for the query
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=0&api-key=" + API_KEY;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        $("#search-confirm").text(JSON.stringify(response));
      });



})
