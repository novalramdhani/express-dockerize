const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200)
        .json({
            message: "Hello Express"
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}, http:localhost:${port}`);
});

module.exports = app;