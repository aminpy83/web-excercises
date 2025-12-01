import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pub = app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(pub + "/public/index.html");
})

app.post("/submit", (req, res) => {
var {street, pet}  = req.body;
    res.send(street + pet);
})