
const express = require("express");

const app = express();

app.use(express.static("public"));

// GET  /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/public/views/works.html");
  });

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/public/views/gallery.html");
  });



app.listen(3000, () => {
  console.log("Server is running!");
});
