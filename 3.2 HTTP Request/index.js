import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/contact", (req, res) => {
    res.send('Contact me <a href="wbdev135@gmail.com"> click heres </a>');
})

app.get("/about", (req, res) => {
    res.send('<h1>nothing here</h1>');
})

app.listen(port, () => {
    console.log(`Server on ${port}`);
})