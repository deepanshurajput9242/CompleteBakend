const express=require('express');
const noteModel=require('./modules/note.model')
const app=express();



app.use(express.json());//json data ko read krne k liye ye line likhi h

//app.use ek middle ware h jo ki req.body m data ko json m convert krta h
//note={}

/*
GET /notes - Retrieve all notes
POST /notes - Create a new note
GET /notes/:id - Retrieve a specific note
PUT /notes/:id - Update a specific note
DELETE /notes/:id - Delete a specific note
*/


app.post('/notes',async(req,res)=>{
    const data=req.body;
   await noteModel.create(data)({
        title:data.title,
        description:data.description


    })
    res.status(201).json({
        success:true,
        message:"note added successfully",
    })
})

app.get('/notes',async(req,res)=>{
    const notes=await noteModel.find();
    res.status(200).json({
        success:true,
        data:notes
    })
})

module.exports=app
