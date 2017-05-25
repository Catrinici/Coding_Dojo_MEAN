let express = require("express");
let app = express();

const path = require('path');

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

//Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Morgan debugger
let morgan = require("morgan");
app.use(morgan('dev'));

//Mongo DB
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');
let UserSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    editable: { type: Boolean, require: true }
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");

//Route
//Get USers
app.get("/users", (req, res, next) => {
    User.find({}, (err, users) => {
        return res.json(users);
    })
})

//Create USers
app.post("/users", (req, res, next) => {
    console.log("Server > POST '/users' > user", req.body);
    delete req.body._id
    User.create(req.body, (err, user) => {
        if (err) return res.json(err)
        else return res.json(user)
    })
})

//Destroy user
app.delete("/users/:id", (req, res, next) => {
    console.log("Server > DELETE '/users/:id' > id", req.params.id);
    User.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
})
app.put("/users/:id", (req, res, next) => {
    console.log("Server > PUT '/users/:id' > id", req.params.id);
    console.log("Server > PUT '/users/:id' > id", req.body);
    User.update({ _id: req.params.id }, req.body, (err, rawData) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
})

app.all("*", (req, res, next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
})

//Server listening
app.listen(1337, () => console.log("Server running at port 1337"));