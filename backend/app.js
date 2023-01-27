const express = require("express");
const app = express();
const cors = require("cors");

const User = require("./Models/userModel");
const createPassword = require("./createPassword");

const bcrypt = require("bcrypt");

new createPassword(User);

app.use(cors());
app.use(express.json());

require("dotenv").config();

const jwt = require("jsonwebtoken");




app.get("/", async(req, res) => {
    const users = await User.findAll();

    res.json(users);
})


app.get("/private", async (req, res) => {

    const token = req.headers.authorization;

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        res.json({ message: "Acesso autorizado", userData: decoded });
    }
    catch(err){
        res.status(401).json({ message: "Acesso negado" });
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;


    try{
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(user){
        
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            console.log(isPasswordCorrect);


            if(isPasswordCorrect){
                const secret = process.env.JWT_SECRET
                const options = { expiresIn: "60s" };
                const token = jwt.sign({ id: user.id }, secret, options );

                res.json({ message: "Autenticação bem sucedida", name: user.name, token });

            
            }
            else{
                throw new Error("Email ou senha incorretos");
            }
            
        }

        else{
            throw new Error("Email incorreto!");
        }

       
    }

    catch(err){
        if(err.message === "Email ou senha incorretos"){
            res.status(400).json({error: "Email ou senha incorretos"});
        } 
        else if(err.message === "Email incorreto!"){
            res.status(400).json({error: "Email incorreto"});
        }
        else{
            res.status(400).json({error: "Erro desconhecido"});
        }
    }
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

app.put("/edit", async (req, res) => {
    const { id, name, phone, email } = req.body;


    try {
        const userEdit = await User.update({
            name: name,
            phone: phone,
            email: email,
        },
        {
            where: {
                id: id
            }
        });

        res.json(userEdit);
        
    } catch (err) {
        res.status(500).json(err);
    }
});


app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const userDelete = await User.destroy({
            where: {
                id: id
            }
        });

        res.json(userDelete);
    }

    catch(err){
        res.status(500).json(err);
    }
});

app.listen(5000, () => {
    console.log("Servidor funcionando na porta 5000!");
})