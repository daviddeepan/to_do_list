const express = require('express');
const { remove } = require('../models/postmodel');
const router = express.Router();

const posts = require('../models/postmodel');



router.post('/', async (req,res)=>{
    const post = new posts({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPosts = await post.save();
     res.json(savedPosts);   
    }catch (err){
        res.json({message:err});
    }
});


router.get('/', async (req,res)=>{

    try{
        const getposts =  await posts.find();
        res.json(getposts);
    }catch (err){
        res.json({message:err});
    }
     
});

router.get('/:postId', async (req,res)=>{
    try{
        const idItem = await posts.findById(req.params.postId);
        res.json(idItem);

    }catch (err){
        res.json({message:err});
    }
});


router.delete('/:postId', async (req,res)=>{
    try{
        const dltitem = await posts.remove({_id: req.params.postId});
        res.json(dltitem);

    }catch (err) {
        res.json({message:err});
    }
});

router.patch('/:postId', async (req,res)=>{
    try{
        const updateditem = await posts.updateOne(
            {$set: {title:req.body.title}},
            {_id: req.params.postId});
             
        res.json(updateditem);

    }catch (err) {
        res.json({message:err});
    }
});
 
module.exports = router;