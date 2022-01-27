const express = require('express')
const Sobre = require('../models/sobre')
const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const sobre = req.body;
        const savesobre = await new Sobre(sobre).save();
        res.json({error: false, sobre: savesobre})
    }catch(err){
        res.json({error: true, message: err.message})
    }
})
router.get("/", async(req, res)=>{
    try{
        const sobre = await Sobre.find({});
        res.json({error: false, sobre});
    }catch(err){
        res.json({error: true, message: err.message})
    }
})

//um registro apenas 
router.get("/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const sobre = await Sobre.findById(id);
        res.json({ error: false, sobre});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//atualizar registro
router.put('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const novo_sobre = req.body;
        const sobre = await Sobre.findByIdAndUpdate(id, novo_sobre);
        res.json({error: true, sobre});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//deletar registro
router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        await Sobre.findOneAndDelete(id);
        res.json({error: false});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;
