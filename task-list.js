const setEditModal = (title) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/task/${title}`, false);
    xhttp.send();

    const task = JSON.parse(xhttp.responseText);

    const {
        description,
    } = task;

    document.getElementById('title').value = title;
    document.getElementById('description').value = description;

    // setting up the action url for the task
    document.getElementById('editForm').action = `http://localhost:3000/task/${title}`;
}

const deleteTask = (title) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/task/${title}`, false);
    xhttp.send();

    location.reload();
}

const loadTasks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/task", false);
    xhttp.send();

    const tasks = JSON.parse(xhttp.responseText);

    for (let task of tasks) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div>Title: ${task.title}</div>
                        <div>Task: ${task.description}</div>
                        <hr>
                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editTaskModal" onClick="setEditModal(${task.title})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('tasks').innerHTML = document.getElementById('tasks').innerHTML + x;
    }
}

loadTasks();