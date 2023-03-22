const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Hi ANTU");
});


app.listen(port, () => console.log(`${port}`));