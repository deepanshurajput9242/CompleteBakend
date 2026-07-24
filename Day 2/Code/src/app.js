const express= require('express');//server ko create kia gya h

// yh kaam  app.js ka h 
const app=express();
app.use(express.json());//express.json() middleware h jo ki req.body m data ko json m convert krta h
// ap.get("/",(req,res)=>{
//     res.send("Hellow")
// })
// app.listen(3000);
const notes=[]



/*
note={
title:"my first note",
description:"this is my first note"
},


*/

//api create kregi 
/*user ko ek note create krna h toh do cheej deni hogi 
1. title
2. description
user frontend p rhta h 
frontend se koi data server pr bhejna h toh uske liye post request use hoti h


ek api create krne k liye 
*/
// app.post('/notes') agar post use krna h toh 
//app.get('/notes') agar get use krna h toh
//app.put('/notes') agar put use krna h toh
//app.delete('/notes') agar delete use krna h toh

//POST/notes

app.post('/notes',(req,res)=>{//notes p
    notes.push(req.body);//req.body m user ka data aayega
   res.status(201).json({//EK NOTE CREATE HONE K BAAD STATUS 201 AAYEGA

    success:true,
    message:"note added successfully",
   

   })
} )
//ab hm server se data frontend p bhejna h toh get request use krte h
// ab hm ek api bnaaynge jisme yh cheej get se hone wali h'

app.get('/notes',(req,res)=>{
     res.status(200).json({//req aai api pr toh turant hi hm response krenge or data fetch krenge notes k liye 
    message:"notes fetched successfully",
    data:notes
     })

})

















// req aai h body isiliye yhan ek middle ware use hoga 


//postman se data bhejna h toh postman m body m jao aur raw select kro aur json select kro aur data bhejo

//postman kya h 
// postman jb bhio hm develop krte h as a frontend ki trh kaam krta h 
//api ka  aata h 

module.exports=app; //app kya h server ka instanve h 
