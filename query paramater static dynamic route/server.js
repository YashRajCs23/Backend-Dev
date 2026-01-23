const express = require('express');
const app = express();
const users = require('./data.js');

app.get('/', (req, res) => {
    res.send("Home route accessed");
});

app.get('/home', (req, res) => {
    res.send("Home route accessed");
});

/* All users */
app.get('/user', (req, res) => {
    res.json(users);
});

// static route pehle
app.get('/user/profile', (req, res) => {
    res.send("User profile route accessed");
});

// query parameters
// http://localhost:3000/user/page?pageSize=1&limit=5
app.get('/user/page', (req, res) => {
    const pageSize = req.query.pageSize;
    const limit = req.query.limit;
    const startIndex= (pageSize - 1) * limit;
    const endIndex= pageSize * limit;
    const pageData= users.slice(startIndex, endIndex);
    res.json({
        pageSize,
        limit,
        pageData,
    });
});

// dynamic route baad me
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foundUser = users.find(ele => ele.id === id);
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 → http://localhost:3000");
});
