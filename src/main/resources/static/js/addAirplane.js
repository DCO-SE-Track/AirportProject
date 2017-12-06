function postForm(){

    var model = $("#model").val();
    var airport = $("$airport").val();


    var airplane = {
        model: model,
        airport: airport
    };

    var airplaneString = JSON.stringify(room);

    $.ajax({
        url: "http://localhost:8080/api/airplane/add",
        type: "post",
        data: airplaneString,
        contentType: "application/json",
        success: function(result) {
            // Show result
            $("#airplaneModal").modal("toggle");
            // Refresh dataTable
            getAirplanes();
        }
    });

};