interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mayonesa",
    lastName: "Gmomitas",
    age: 333,
    location: "Yerusalen",
}

const student2: Student = {
    firstName: "Goodyear",
    lastName: "Rueditas",
    age: 9009,
    location: "Tasmania",
}

// Array of student objects
const studentsList = [student1, student2]
//     { firstName: "Michellin", lastName: "Gmomitas", age: 333, location: "Yerusalen" },
//     { firstName: "Goodyear", lastName: "Rueditas", age: 9009, location: "Tasmania" }

// Function to render the table
function renderTable(data: Student[]) {
    // Create table element
    const table = document.createElement('table');

    // Create header row
    const headerRow = document.createElement('tr');
    const headers = ['First Name', 'Location'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Create rows for each student
    data.forEach((studentsList: Student) => {
        const row = document.createElement('tr');

        // Create cell for first name
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = studentsList.firstName;
        row.appendChild(firstNameCell);

        // Create cell for location
        const locationCell = document.createElement('td');
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
