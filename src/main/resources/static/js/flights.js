$(document).ready(function() {
    $('#airplaneTable').DataTable({
        columns: [
            {"data": "model"}
        ]
    });

    getAirplanes();
} );

function postForm(){

    var model = $("#model").val();


    var airplane = {
        model: model,
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

function getAirplanes() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/airplane/all",
        type: "get",
        success: function(airplanes) {

             $('#table').DataTable().clear();
             $('#table').DataTable().rows.add(airplanes);
             $('#table').DataTable().columns.adjust().draw();
        }
    });
}

function loadModal(url, id){
    $(id).empty();
    $(id).load(url);
}