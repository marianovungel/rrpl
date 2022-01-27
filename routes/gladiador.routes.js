const express = require('express')
const Gladiador = require('../models/gladiador')
const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const gladiador = req.body;
        const saveGladiador = await new Gladiador(gladiador).save();
        res.json({error: false, gladiador: saveGladiador})
    }catch(err){
        res.json({error: true, message: err.message})
    }
})
router.get("/", async(req, res)=>{
    try{
        const gladiador = await Gladiador.find({});
        res.json({error: false, gladiador});
    }catch(err){
        res.json({error: true, message: err.message})
    }
})

//um registro apenas 
router.get("/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const gladiador = await Gladiador.findById(id);
        res.json({ error: false, gladiador});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//atualizar registro
router.put('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const novo_gladiador = req.body;
        const gladiador = await Gladiador.findByIdAndUpdate(id, novo_gladiador);
        res.json({error: true, gladiador});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//deletar registro
router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        await Gladiador.findOneAndDelete(id);
        res.json({error: false});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;
