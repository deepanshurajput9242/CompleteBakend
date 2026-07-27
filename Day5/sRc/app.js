const express = require("express");
const multer=require('multer');
const uploadFile=require("./services/storage.service")

const app = express();

app.use(express.json());

const upload=multer({storage:multer.memoryStorage()})
//multer ka use is baar aap file bhej rhe ho is bar text nhi bhej rhe toh file ko read krne k liye kuch tareeka hoga isisliye multer ko use kr rhe h 


app.post('/create-post',upload.single("image") ,async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result=await uploadFile(req.file.buffer)
    console.log(result);
    
    
    
})

module.exports = app;