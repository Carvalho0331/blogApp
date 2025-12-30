const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categorias")
const Categorias = mongoose.model("categorias")


router.get("/", ((req,res)=>{
    res.render("admin/index")
}))

router.get("/post", ((req, res)=>{
    res.send("Meus Posts")
}))

router.get("/categorias", ((req,res) =>{
    res.render("admin/categorias")

}))

router.post("/categorias/nova", (req,res)=>{
    const novaCategoria = {
        nome:req.body.nome,
        slug:req.body.slug
    }

    new Categorias(novaCategoria).save().then(()=>{
        console.log("Dados salvos")
    }).catch((erro)=>{
        console.log("Falha ao Salvar os arquivos "+ erro)
    })
})


router.get("/categorias/add",(req,res)=>{
res.render("admin/addcategorias")
})




module.exports = router