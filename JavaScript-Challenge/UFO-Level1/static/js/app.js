// from data.js
var tableData = data;

// YOUR CODE HERE!

// Target the html table body
var table_body = d3.select("tbody");

// For loop over the data list and create some rows for each dictionary in the data list
for (var index = 0; index < tableData.length; index++) {
  var sighting = tableData[index];

  // Extract out each piece of information
  var date = sighting['datetime'];
  var city = sighting['city'];
  var state = sighting['state'];
  var country = sighting['country'];
  var shape = sighting['shape'];
  var durationMinutes = sighting['durationMinutes'];
  var comments = sighting['comments'];

  // Create an empty row and add it to the table body
  var row = table_body.append("tr");

  // Add c7 ells (td) to the row and fill them with the correct values from above (date, city, etc)
  row.append("td").text(date)
  row.append("td").text(city)
  row.append("td").text(state)
  row.append("td").text(country)
  row.append("td").text(shape)
  row.append("td").text(durationMinutes)
  row.append("td").text(comments)
  
}

function filter_table() {
  console.log("filter_table has been triggered!");

  // Step 1: Get the date input value
  var input = d3.select("#datetime").node().value;

  // Step 2: Delete the table
  table_body.html("")

  // Step 3: Rebuild the table but filtering for only the ones that match the date input value
  // NOTE: Pretty much copied the whole for loop from above, but making sure only rows are built using the matching date
  // For loop over the data list and create some rows for each dictionary in the data list
  for (var index = 0; index < tableData.length; index++) {
    var sighting = tableData[index];

    if (sighting['datetime'] == input) {
      // Extract out each piece of information
      var date = sighting['datetime'];
      var city = sighting['city'];
      var state = sighting['state'];
      var country = sighting['country'];
      var shape = sighting['shape'];
      var durationMinutes = sighting['durationMinutes'];
      var comments = sighting['comments'];
  
      // Create an empty row and add it to the table body
      var row = table_body.append("tr");
  
      // Add c7 ells (td) to the row and fill them with the correct values from above (date, city, etc)
      row.append("td").text(date)
      row.append("td").text(city)
      row.append("td").text(state)
      row.append("td").text(country)
      row.append("td").text(shape)
      row.append("td").text(durationMinutes)
      row.append("td").text(comments)
    }

  }

}