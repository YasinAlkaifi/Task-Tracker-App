
// // script.js
// // Section 1: TODOs
// // TODO: Register submissions from the user on the form.
// // TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// // TODO: Call the render function to update the table with the new tasks.

// // Section 2: App State Variables
// let tasks = [];

// // Section 3: Cached Element References
// const taskForm = document.getElementById("taskForm");
// const taskTable = document.getElementById("taskTable");

// // Example console.log to test if elements are correctly selected
// console.log(taskForm); // Should log the form element to the console
// console.log(taskTable); // Should log the table element to the console


// // Function to handle form submissions
// function handleSubmission(event) {
//     event.preventDefault();
//     // TODO: Get form input values
//     // TODO: Validate input fields
//     // TODO: Update the tasks array
//     render();
//     }
//     // Function to render tasks in the table
//     function render() {
//     // TODO: Use array methods to create a new table row of data for each item in the arr
//     }
//     // Function to initialize the table
//     function init() {
//     taskTable.innerHTML = ''; // Clear the table
//     tasks = []; // Reset the tasks array
//     render(); // Call the render function
//     }


// // script.js
// // Section 1: TODOs
// // TODO: Register submissions from the user on the form.
// // TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// // TODO: Call the render function to update the table with the new tasks.

// // Section 2: App State Variables
// let tasks = [];

// // Section 3: Cached Element References
// // Ensure these IDs match those in your HTML
// const taskForm = document.getElementById('taskFormId'); // Replace 'taskFormId' with your form's id
// const taskTable = document.getElementById('taskTableId'); // Replace 'taskTableId' with your table's id

// // Function to handle form submissions
// function handleSubmission(event) {
//     event.preventDefault();
//     // Get form input values
//     const taskName = document.getElementById('taskName').value;
//     const taskDescription = document.getElementById('taskDescription').value;
//     const taskDeadline = document.getElementById('taskDeadline').value;

//     // Validate input fields
//     if (!taskName || !taskDeadline) {
//         alert('Task name and deadline are required!');
//         return;
//     }

//     // Update the tasks array
//     tasks.push({
//         name: taskName,
//         description: taskDescription,
//         deadline: taskDeadline
//     });

//     render();
// }

// // Function to render tasks in the table
// function render() {
//     taskTable.innerHTML = ''; // Clear the table first

//     // Use array methods to create a new table row for each item in the array
//     tasks.forEach(task => {
//         const row = taskTable.insertRow();
//         const nameCell = row.insertCell(0);
//         const descriptionCell = row.insertCell(1);
//         const deadlineCell = row.insertCell(2);

//         nameCell.textContent = task.name;
//         descriptionCell.textContent = task.description;
//         deadlineCell.textContent = task.deadline;
//     });
// }

// // Function to initialize the table
// function init() {
//     taskTable.innerHTML = ''; // Clear the table
//     tasks = []; // Reset the tasks array
//     render(); // Call the render function
// }

// // Add event listener to the form
// taskForm.addEventListener('submit', handleSubmission);

// // Initialize the table when the script loads
// init();


// Section 1: TODOs (Add this comment to remind you of the functionalities to implement)
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = []; // This array will store each task's details.

// Section 3: Cached Element References
document.addEventListener('DOMContentLoaded', (event) => {
    const taskForm = document.getElementById('taskForm');
    const taskTable = document.getElementById('taskTable');

    // Function to handle form submissions
    function handleSubmission(event) {
        event.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskDeadline = document.getElementById('taskDeadline').value;

        // Validate input fields
        if (!taskName || !taskDeadline) {
            alert('Task name and deadline are required!');
            return;
        }

        // Update the tasks array
        tasks.push({
            name: taskName,
            description: taskDescription,
            deadline: taskDeadline
        });

        render(); // Call render to update the UI
    }

    // Function to render tasks in the table
    function render() {
        taskTable.innerHTML = tasks.map((task, index) =>
            `<tr>
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.deadline}</td>
                <td><button onclick="markTaskComplete(${index})">Complete</button></td>
                <td><button onclick="removeTask(${index})">Remove</button></td>
            </tr>`
        ).join('');
    }

    // Function to remove a task
    window.removeTask = (index) => {
        tasks.splice(index, 1);
        render(); // Re-render the table to show the updated list
    };

    // Function to mark a task as complete (This can be implemented by modifying the task object and styling)
    window.markTaskComplete = (index) => {
        // Example implementation could be setting a 'completed' property and styling completed tasks differently
        console.log('Task marked as complete:', tasks[index]);
        // Remember to add logic here for your app's requirements
    };

    // Event listener for form submission
    taskForm.addEventListener('submit', handleSubmission);

    // Call render initially to render any existing tasks (in this case, the array starts empty)
    render();
});
