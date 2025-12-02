import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var Data;
function lenghtOf(a,b){
    Data = a.length + b.length;
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('index.ejs')
});

app.post("/submit", (req, res) => {
    lenghtOf(req.body['fName'], req.body['lName']);
    res.render('index.ejs', {Data});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
