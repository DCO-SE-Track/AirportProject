function postForm(){
    console.log("Posting new plane");
    var model = $("#model").val();
    var airport = $("#airportLocation").val();
    var currentFuel = 5;

    var airplane = {
        model: model,
        airport: airport,
        currentFuel: currentFuel
    };

    var airplaneString = JSON.stringify(airplane);
    console.log(airplane);

    $.ajax({
        url: "http://localhost:8080/api/airplane/add",
        type: "post",
        data: airplaneString,
        contentType: "application/json",
        success: function(result) {
            // Show result
            $("#airplaneModal").modal("toggle");
            $("#model").val("");
            // Refresh dataTable
            getAirplanes();
        }
    });

};