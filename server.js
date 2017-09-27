import express from 'express';
import mongojs from 'mongojs';
import bodyParser from 'body-parser';
const app = express();
const db = mongojs('entry', ['entry']);


app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/entry', function (req, res) {
    db.entry.find(function (err, docs) {
        //console.log(docs);
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
    //console.log(id);
    db.entry.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

// app.put('/entry/:id', function (req, res) {
//     const id = req.params.id;
//     db.entry.findAndModify({
//             query: {_id: mongojs.ObjectID(id)},
//             update: {$set: {
//                 title: req.body.title,
//                 mainText: req.body.mainText,
//                 tagList: req.body.tagList
//             }},
//             new: true
//     },
//         function (err, doc) {
//             res.json(doc);
//         }
//     );
// });

const server = app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});