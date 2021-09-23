const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt =require("bcryptjs");


require("./db/conn");
// require("./db/db");

// const Contactu = require("./models/contactus");

// const Contactu = require("./models/contactus");
const {json} =require("express");
const { Mongoose } = require("mongoose");


const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index")
});

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})