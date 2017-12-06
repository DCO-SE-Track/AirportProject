$(document).ready(function() {
    $('#airplaneTable').DataTable({
        columns: [
            {"data": "model"},
            {"data": "airport"}
        ]
    });

} );

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