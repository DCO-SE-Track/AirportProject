var airplaneId = null;

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

function bookFlight(row){
//    Hier iets met een location veranderen en fuel verlagen
    var table = $("#airplaneTable").DataTable();
    var selectedModel = $('#airplaneSelect').val();
    var selectedLocation = $('#airportLocationSelect').val();

    var dataObject = table.row(row).data();
    console.log(dataObject);

    if(selectedLocation !== null && selectedModel !== null){
//        Hier een update method om fuel en location te veranderen
          console.log(dataObject.model + ' and ' + dataObject.id);

          $.ajax({
              url:"http://localhost:8080/api/airplane/update/" + dataObject.id,
              type:"put",
              data: JSON.stringify(dataObject),
              contentType: "application/json",
              success: function(result){
                  console.log("Updated the airplane.");

                  // Close the modal
                  $("#bookFlightModal").modal("toggle");
                  // Get the guests again
                  getAirplanes();
              }
          });
    }
}

var airplaneList = {};

function getAirplaneDropDown() {
    console.log("getting airplanes...")

    $("#airplaneSelect").empty();
    $.ajax({
        url:"http://localhost:8080/api/airplane/all",
        type:"get",
        success: function(result) {
            console.log("These are the airplanes: " + result);
            for(i=0;i<result.length;i++) {
                    // add room to dictionary
                    airplaneList[result[i].model] = result[i];
                    $("#airplaneSelect").append('<option value=' + result[i].model + '>' + result[i].model + '</option>');
               }
        }
    })

}

function loadModal(url, id){
    $(id).empty();
    $(id).load(url);
}