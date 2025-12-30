// carregado modulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const admin = require("./routes/admin")
const path = require("path")

// Configuracoes
    // BodyParser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    //Handlebars
    app.engine("handlebars", handlebars.engine({defaultLayout:"main"}))
    app.set("view engine", "handlebars")
    // Mongoose
        mongoose.connect("mongodb+srv://salimo_carvalho:bOrbRtVatRnBmFI9@cluster0.zjvqxhy.mongodb.net/").then(()=>{
            console.log("conectado ao mongoDB")
        }).catch((erro)=>{
            console.log("Falha ao conectar ao banco de dados "+ erro)
        })
    //public
    // pegar um arquivo estatico
    app.use(express.static(path.join(__dirname,"public")))
// rotas

// o primeiro valor posso colocar qualquer coisa
app.use("/admin", admin)

// outros

// const port = 8081

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor Rodando")
})