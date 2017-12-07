var airplaneId = null;


/*
 * Returns a list of all airplane models
 */
function getAirplanes() {
    console.log("getting data...");

    $.ajax({
        url: "http://localhost:8080/api/airplane/all",
        type: "get",
        success: function(airplanes) {

            console.log("This is the Data: " + airplanes)

             // Fills the datatables
             $('#airplaneTable').DataTable().clear();
             $('#airplaneTable').DataTable().rows.add(airplanes);
             $('#airplaneTable').DataTable().columns.adjust().draw();
        }
    });
}

/*
 * Adds the airplane
 */
function addAirplane(){
    var model = $("#model").val();
    var airport = $("#airportLocation").val();
    var currentFuel = 5;

    var airplane = {
        model: model,
        airport: airport,
        currentFuel: currentFuel
    };

    var airplaneString = JSON.stringify(airplane);

    $.ajax({
        url: "http://localhost:8080/api/airplane/add",
        type: "post",
        data: airplaneString,
        contentType: "application/json",
        success: function(result) {
            console.log("Added the airplane.");
            // Show result
            $("#airplaneModal").modal("toggle");
            $("#model").val("");
            // Refresh dataTable
            getAirplanes();
        }
    });

};

/*
 * Refills the tank
 * @param: selected row
 */
function refillTank(row){
    // Gets the table
    var table = $("#airplaneTable").DataTable();

    // Gets the data object from the selected row
    var dataObject = table.row(row).data();

    // If the tank is full, return
    if(dataObject.currentFuel >= 5){
        $('#errorModal').modal("toggle");
        return;
    }

    // Updates the fuel
    dataObject.currentFuel = dataObject.max_FUEL;

    // Updates the database model
    $.ajax({
      url:"http://localhost:8080/api/airplane/update/" + dataObject.id,
      type:"put",
      data: JSON.stringify(dataObject),
      contentType: "application/json",
      success: function(result){
          console.log("Updated the airplane.");
          rowSelected = false;

          // Get the airplanes again
          getAirplanes();
      }
    });
}

/*
 * Removes an airplane from the list and database
 * @param: selected row
 */
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
            // Get the airplanes again
            console.log("Removed airplane.");
            rowSelected = false;
            getAirplanes();
        }
    });
}

/*
 * Sets the destination of the airplane to the new
 * location and updates the fuel.
 * @param: selected row
 */
function bookFlight(row){
    // Gets the information from the table and input field
    var table = $("#airplaneTable").DataTable();
    var selectedLocation = $('#airportLocationSelect').val();

    // Creates an object from the table data
    var dataObject = table.row(row).data();

    // If currentFuel is not enough, return
    if(dataObject.currentFuel <= 1){
        $("#bookFlightModal").modal("toggle");
        $('#errorModal').modal("toggle");
        return;
    }

    // Adjust the object's parameters
    dataObject.airport = selectedLocation;
    dataObject.currentFuel -= dataObject.flight_COST;
    console.log(dataObject);

    // If the selected location is not null, update
    if(selectedLocation !== null){

          $.ajax({
              url:"http://localhost:8080/api/airplane/update/" + dataObject.id,
              type:"put",
              data: JSON.stringify(dataObject),
              contentType: "application/json",
              success: function(result){
                  console.log("Updated the airplane.");

                  // Close the modal
                  $("#bookFlightModal").modal("toggle");
                  rowSelected = false;
                  // Get the airplanes again
                  getAirplanes();
              }
          });
    }
}