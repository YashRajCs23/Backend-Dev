const express = require('express');
const app = express();
const users = require('./data.js');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// user above age 25
app.get('/users/age/above25', (req, res) => {
    const ageGreaterThan25 = users.filter(u => u.age > 25);
    res.status(200).json(ageGreaterThan25);
});

// creating route with Mr prefix
app.get('/users/mr', (req, res) => {
    const usersWithMrPrefix = users.map(u => ({
        ...u,
        name: `Mr. ${u.name}`
    }));
    res.status(200).json(usersWithMrPrefix);
});

// particular user by id (ALWAYS LAST)
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
