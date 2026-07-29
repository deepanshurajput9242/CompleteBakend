const express = require("express");
const multer=require('multer');
const uploadFile=require("./services/storage.service")

const app = express();

app.use(express.json());

const upload=multer({storage:multer.memoryStorage()})
//multer ka use is baar aap file bhej rhe ho is bar te
// 
//xt nhi bhej rhe toh file ko read krne k liye kuch tareeka hoga isisliye multer ko use kr rhe h 
const postModel=require("./models/")

app.post('/create-post',upload.single("image") ,async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result=await uploadFile(req.file.buffer)
    // console.log(result);

    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post created successfully"
        post
    })

    app.get("/posts",async(req,res)=>{
        const posts=await postModel.find()
        return res.status(200).json({
            message:"Post Fetched successfully"
            posts
            
        })

    })
    
    
    
})

module.exports = app;