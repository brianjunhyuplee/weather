var q = $('#cityName');
var btn = $('#goBtn');
var cityName = $('#cityName');
var cityDisplay = $('#cityDisplay');
var history = $('searchHistory');

$("#goBtn").on("click", function (event) {
    event.preventDefault();
    q = cityName.val();
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=1f8d3642112c88ffeef49b457df55b08";
    cityDisplay.text(cityName.val());
    var historyDiv = $("<div>").text(cityName.val());
    //history.text(historyDiv);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var temp = response.list.main.temp;
        console.log(temp);

    });

});
