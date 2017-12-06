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

function loadModal(url, id){
    $(id).empty();
    $(id).load(url);
}