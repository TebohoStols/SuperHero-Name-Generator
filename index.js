import express from "express";
import bodyParser from "body-parser"

/*Import all the information needed to get the whole page*/
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var superName = "";

app.use(bodyParser.urlencoded({extended: true}));


function superNameGenerator(req, res, next){
    console.log(req.body);
    superName = req.body["nick-name"] +" "+req.body["city"];
    next();
}

app.use(superNameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(`<h2> Your Superhero name is: <h2> <p> ${superName} 🦸‍♂️</p>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});