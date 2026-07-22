const express=require ('express');
const app= express();//server create kia h 


app.get("/",(req,res)=>{//"/" api p request aati h toh aap response doge hello world
 res.send("hello world");
})

app.get("/about",(req,res)=>{
    res.send("About Page");
})
app.listen(3001);// is line m server ko start kia h 
// kya tumne server ko program kia?? response??



// const express=require('express');
// const app=express()
// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })
// app.listen(3000); practice makes man perfect 