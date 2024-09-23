var student1 = {
    firstName: "Michellin",
    lastName: "Gmomitas",
    age: 333,
    location: "Yerusalen",
};
var student2 = {
    firstName: "Goodyear",
    lastName: "Rueditas",
    age: 9009,
    location: "Tasmania",
};
// Array of student objects
var studentsList = [
    { firstName: "Michellin", lastName: "Gmomitas", age: 333, location: "Yerusalen" },
    { firstName: "Goodyear", lastName: "Rueditas", age: 9009, location: "Tasmania" }
];
// Function to render the table
function renderTable(data) {
    // Create table element
    var table = document.createElement('table');
    // Create header row
    var headerRow = document.createElement('tr');
    var headers = ['First Name', 'Location'];
    headers.forEach(function (headerText) {
        var header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    // Create rows for each student
    data.forEach(function (studentsList) {
        var row = document.createElement('tr');
        // Create cell for first name
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = studentsList.firstName;
        row.appendChild(firstNameCell);
        // Create cell for location
        var locationCell = document.createElement('td');
        locationCell.textContent = studentsList.location;
        row.appendChild(locationCell);
        // Append row to table
        table.appendChild(row);
    });
    // Append the table to the container div
    document.getElementById('table-container').appendChild(table);
}
// Call the function to render the table
renderTable(studentsList);
