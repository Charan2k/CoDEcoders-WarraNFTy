const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.post('/payment', (req, res) => {
    const { id, counter } = req.body;
    console.log(id + "sdsd" +counter);
    //call for nft mint;
    res.send({
        uid: Math.ceil(Math.random()*6900) + "charan"
    });
})

app.get('/test', (req, res) => {
    res.send("Hello World");
})

app.listen(5069);