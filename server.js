import express from 'express';
import mongojs from 'mongojs';
import bodyParser from 'body-parser';
const app = express();
const db = mongojs('entry', ['entry']);

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/entry', function (req, res) {
    db.entry.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/entry', function (req, res) {
    db.entry.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/entry/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    db.entry.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

app.put('/entry', function (req, res) {
    //console.log(req.body.nameUser);
    db.entry.findAndModify({
            query: {},
            update: {$set: {nameUser: req.body.nameUser, city: req.body.city, country: req.body.country}},
            new: true,
            multi: true
    },
        function (err, doc) {
            res.json(doc);
        }
    );
});

const server = app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});