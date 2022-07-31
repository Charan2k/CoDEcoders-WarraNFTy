const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.post('/payment', (req, res) => {
    const { id, counter } = req.body;

    // database logic and metadata
    const {purchase_date} = req.body;
    console.log(purchase_date);
    const date = new Date(purchase_date);
    date.setFullYear(date.getFullYear() + 1);
    const new_date = date.toUTCString();
    const dbdata = {
        ...req.body,
        valid_till: new_date
    }

    console.log(new_date);
    res.send({
        uid: Math.ceil(Math.random()*6900) + "charan",
    });
})

app.get('/test', (req, res) => {
    res.send("Hello World");
})

app.listen(5069);