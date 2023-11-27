const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/generate-comic', async (req, res) => {
    const formData = req.body;

    res.send({ success: true, message: 'Comic generated successfully!' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
