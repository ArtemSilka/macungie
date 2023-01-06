// Create new Express server
const express = require("express");
const app = express();
// Tell which port to run on
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req,res) => res.send("Macungie 2023!"));
// Express starts a socket and listen for connections on the path
app.listen(port,() => console.log(`Server is running on ${port} port`));