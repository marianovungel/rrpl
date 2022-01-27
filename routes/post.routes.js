const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.post("/", async(req, res)=>{
    try{
        const post = req.body;
        const savepost = await new Post(post).save();
        res.json({error: false, post: savepost})
    }catch(err){
        res.json({error: true, message: err.message})
    }
})
router.get("/", async(req, res)=>{
    try{
        const post = await Post.find({});
        res.json({error: false, post});
    }catch(err){
        res.json({error: true, message: err.message})
    }
})

//um registro apenas 
router.get("/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const post = await Post.findById(id);
        res.json({ error: false, post});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//atualizar registro
router.put('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const novo_post = req.body;
        const post = await Post.findByIdAndUpdate(id, novo_post);
        res.json({error: true, post});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

//deletar registro
router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        await Post.findOneAndDelete(id);
        res.json({error: false});
    }catch(err){
        res.json({error: true, message: err.message});
    }
});

module.exports = router;
