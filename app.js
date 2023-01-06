// Create new Express server
const express = require("express");
const app = express();
// Tell which port to run on
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

// Import routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

// body parser
const bodyParser = require("body-parser");

// connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req,res) => res.send("Macungie 2023!!"));
// Express to use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
// Middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Express starts a socket and listen for connections on the path
app.listen(port,() => console.log(`Server is running on ${port} port`));