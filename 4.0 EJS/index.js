import { fileURLToPath } from "url";
import express from 'express';
import { render } from 'ejs';
import path from "path";
import bodyParser from 'body-parser'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

var today, day = new Date;

if (day.getDay() > 4) {
    today = 'end';
} else {
    today = 'day';
}

app.listen(3000, () => {
    console.log('listenning on port 3000');
})


app.get('/', (req, res) => {
    res.render("index.ejs",
    { situation: today });
})