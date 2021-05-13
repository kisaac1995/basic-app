const express = require('express');
const app = express();

app.get("/", (req, res) => {

    res.send("I'm working!");

});

app.listen(5000);