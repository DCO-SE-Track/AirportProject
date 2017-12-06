function getAirplanes() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/airplane/all",
        type: "get",
        success: function(airplanes) {

            console.log("This is the Data: " + airplanes)

             $('#airplaneTable').DataTable().clear();
             $('#airplaneTable').DataTable().rows.add(airplanes);
             $('#airplaneTable').DataTable().columns.adjust().draw();
        }
    });
}

function removeAirplane(row){
    // Get data of datatable
    var table = $("#airplaneTable").DataTable();
    // get object of the row
    var dataObject = table.row(row).data();

    // Make a delete request
    $.ajax({
        url:"http://localhost:8080/api/airplane/delete",
        type:"delete",
        data: JSON.stringify(dataObject),
        contentType: "application/json",
        success: function(result){
            // Get the guests again
            console.log("Removed row.");
            getAirplanes();
        }
    });
}

function loadModal(url, id){
    $(id).empty();
    $(id).load(url);
}