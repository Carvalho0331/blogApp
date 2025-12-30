// criando models
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// definido os models
const Categorias = new Schema({
    nome:{
        type:String,
    },
    slug:{
        type:String,
    },
    date:{
        type:Date,
        // posso passar por padrao qualquer valor
        default:Date.now()
    }
})

mongoose.model("categorias", Categorias)