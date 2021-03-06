var q = $('#cityName');
var btn = $('#goBtn');
var cityName = $('#cityName');
var cityDisplay = $('#cityDisplay');
var history = $('searchHistory');

$("#goBtn").on("click", function (event) {
    event.preventDefault();
    q = cityName.val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + q + "&appid=1f8d3642112c88ffeef49b457df55b08";
    cityDisplay.text(cityName.val());

    // adds search history (does not work)
    //var historyDiv = $("<div>").text(cityName.val());
    //history.text(historyDiv);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //current date
        $("#cityDisplay").empty();
        $("#tomorrow").empty();
        $("#day2").empty();
        $("#day3").empty();
        $("#day4").empty();
        $("#day5").empty();

        cityDisplay.append(response.list[0].dt_txt);
        var currStats = $("<div>");
        var temp = parseInt((response.list[0].main.temp-273.15)*(9/5)+32);
        var currTemp = $("<div>");
        currTemp.text("Temperature: " + temp + "F");
        var currHum = $("<div>");
        var hum = response.list[0].main.humidity;
        currHum.text("Humidity: " + hum + "%");
        var currWind = $("<div>");
        var wind = response.list[0].wind.speed;
        currWind.text("Wind Speed: " + wind + " mph");
        currStats.append(currTemp);
        currStats.append(currHum);
        currStats.append(currWind);
        cityDisplay.append(currStats);

        //future dates
        // 3 hour increment, 8 increments is next day
        $("#tomorrow").append(response.list[8].dt_txt);
        var tmwStats = $("<div>");
        var tmwtemp = parseInt((response.list[8].main.temp-273.15)*(9/5)+32);
        var tmwTempdiv = $("<div>");
        tmwTempdiv.text("Temperature: " + tmwtemp + "F");
        var tmwHumdiv = $("<div>");
        var tmwHum = response.list[8].main.humidity;
        tmwHumdiv.text("Humidity: " + tmwHum + "%");
        tmwStats.append(tmwTempdiv);
        tmwStats.append(tmwHumdiv);
        $("#tomorrow").append(tmwStats);

        $("#day2").append(response.list[16].dt_txt);
        var tmwStats1 = $("<div>");
        var tmwtemp1 = parseInt((response.list[16].main.temp-273.15)*(9/5)+32);
        var tmwTempdiv1 = $("<div>");
        tmwTempdiv1.text("Temperature: " + tmwtemp1 + "F");
        var tmwHumdiv1 = $("<div>");
        var tmwhum1 = response.list[16].main.humidity;
        tmwHumdiv1.text("Humidity: " + tmwhum1 + "%");
        tmwStats1.append(tmwTempdiv1);
        tmwStats1.append(tmwHumdiv1);
        $("#day2").append(tmwStats1);

        $("#day3").append(response.list[24].dt_txt);
        var tmwStats2 = $("<div>");
        var tmwtemp2 = parseInt((response.list[24].main.temp-273.15)*(9/5)+32);
        var tmwTempdiv2 = $("<div>");
        tmwTempdiv2.text("Temperature: " + tmwtemp2 + "F");
        var tmwHumdiv2 = $("<div>");
        var tmwhum2 = response.list[24].main.humidity;
        tmwHumdiv2.text("Humidity: " + tmwhum2 + "%");
        tmwStats2.append(tmwTempdiv2);
        tmwStats2.append(tmwHumdiv2);
        $("#day3").append(tmwStats2);

        $("#day4").append(response.list[32].dt_txt);
        var tmwStats3 = $("<div>");
        var tmwtemp3 = parseInt((response.list[32].main.temp-273.15)*(9/5)+32);
        var tmwTempdiv3 = $("<div>");
        tmwTempdiv3.text("Temperature: " + tmwtemp3 + "F");
        var tmwHumdiv3 = $("<div>");
        var tmwhum3 = response.list[32].main.humidity;
        tmwHumdiv3.text("Humidity: " + tmwhum3 + "%");
        tmwStats3.append(tmwTempdiv3);
        tmwStats3.append(tmwHumdiv3);
        $("#day4").append(tmwStats3);

        $("#day5").append(response.list[40].dt_txt);
        var tmwStats4 = $("<div>");
        var tmwtemp4 = parseInt((response.list[40].main.temp-273.15)*(9/5)+32);
        var tmwTempdiv4 = $("<div>");
        tmwTempdiv4.text("Temperature: " + tmwtemp4 + "F");
        var tmwHumdiv4 = $("<div>");
        var tmwhum4 = response.list[32].main.humidity;
        tmwHumdiv4.text("Humidity: " + tmwhum4 + "%");
        tmwStats4.append(tmwTempdiv3);
        tmwStats4.append(tmwHumdiv3);
        $("#day5").append(tmwStats4);


    });

});
