const express = require('express');
const app = express();

app.get("/:message", (req, res) => {
    res.send(req.params.message);
});

app.listen(5000);