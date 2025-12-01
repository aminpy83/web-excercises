//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const pub = app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post("/check", (req, res) => {
    var password = req.body['password'];
    console.log(password)

    if (password === 'ILOVEProgramming'){
        res.sendFile(path.join(__dirname, 'public', 'secret.html'));
                
    } else {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
})