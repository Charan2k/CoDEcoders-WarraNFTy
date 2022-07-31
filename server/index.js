const express = require('express')
const cors = require('cors')
var fs = require('fs');

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

    const uid = Math.ceil(Math.random()*69696969) + "nft" + Math.ceil(Math.random()*69696969);
    console.log(new_date);
    filelPath = "./db/" + uid + ".json";
    fs.writeFile(filelPath, JSON.stringify(dbdata), function(err) {
        if(err) {
            console.error("Could not write file: %s", err);
        }
    });
    res.send({
        uid: uid
    });
})

app.post('/verifyProduct', (req, res) => {
    const { uid } = req.body;
    const filelPath = "./db/" + uid + ".json";
    fs.readFile(filelPath, function(err, data) {
        if(err) {
            console.error("Could not read file: %s", err);
        }
        const dbdata = JSON.parse(data);
        const {id, counter, valid_till} = dbdata;
        const date = new Date();
        const current_date = date.toUTCString();
        if(current_date > valid_till) {
            res.send({
                status: "expired"
            });
        } else {
            res.send({
                status: "valid"
            });
        }
    })
});

app.get('/test', (req, res) => {
    res.send("Hello World");
})

app.listen(5069);