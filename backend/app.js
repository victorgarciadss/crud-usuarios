const express = require("express");
const app = express();
const cors = require("cors");

const User = require("./Models/userModel");
const createPassword = require("./createPassword");

new createPassword(User);

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
    const users = await User.findAll();

    res.json({ users });
})


app.post("/register", async (req, res) => {
    const { name, phone, email, password } = req.body;
    
    
    const registerUser = await User.create({
        name,
        phone,
        email,
        password,
    });

    res.json({ registerUser });
}) 

app.listen(5000, () => {
    console.log("Servidor funcionando na porta 5000!");
})