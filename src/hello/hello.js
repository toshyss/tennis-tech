const express = require('express');
const app = express();
app.listen(8080);

app.get("/hello", (req, res) => {
    res.send("World!\n");
});

app.get("/helloworld", (req, res) => {
    res.send("hello world!\n");
});