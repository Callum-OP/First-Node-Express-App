const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let tasks = [{
    "title": "Shopping",
    "description": "Go to the shop and buy milk",
},
{
    "title": "Learning",
    "description": "Learn node.js and make an app",
},
{
    "title": "Speaking",
    "description": "Speak to family members",
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/task', (req, res) => {
    const task = req.body;

    // output the task to the console for debugging
    console.log(task);
    tasks.push(task);

    res.send('Task is added to the database');
});

app.get('/task', (req, res) => {
    res.json(tasks);
});

app.get('/task/:title', (req, res) => {
    // reading title from the URL
    const title = req.params.title;

    // searching tasks for the title
    for (let task of tasks) {
        if (task.title === title) {
            res.json(task);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('Task not found');
});

app.delete('/task/:title', (req, res) => {
    // reading title from the URL
    const title = req.params.title;

    // remove item from the tasks array
    tasks = tasks.filter(i => {
        if (i.title !== title) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Task is deleted');
});

app.post('/task/:title', (req, res) => {
    // reading title from the URL
    const title = req.params.title;
    const newTask = req.body;

    // remove item from the tasks array
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i]

        if (task.title === title) {
            tasks[i] = newTask;
        }
    }

    // sending 404 when not found something is a good practice
    res.send('Task is edited');
});

app.listen(port, () => console.log(`To Do List app listening on port ${port}!`));