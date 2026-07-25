📘 Day 4 - Express + MongoDB + Mongoose Notes
📌 Project Structure
Code/
│
├── server.js
├── package.json
│
└── src/
    │
    ├── app.js
    │
    ├── db/
    │      └── db.js
    │
    └── modules/
           └── note.model.js
1️⃣ server.js
Purpose

Ye project ka entry point hota hai.

Is file ka kaam sirf do cheezein hoti hain

Database connect karna
Server start karna
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(3000, () => {
    console.log("Server is working on port 3000");
});
Explanation
Import app
const app = require("./src/app");

Is line se Express application import hoti hai.

Actual Express object app.js me bana hota hai.

Import Database Function
const connectDB = require("./src/db/db");

Ye database connect karne wala function import karta hai.

Database Connect
connectDB();

Ye MongoDB Atlas se connection establish karta hai.

Server start hone se pehle database connect karna best practice hai.

Start Server
app.listen(3000, () => {
    console.log("Server is working on port 3000");
});

Meaning

Port 3000 par Express server start ho gaya.

Flow
server.js

↓

connectDB()

↓

MongoDB Connected

↓

app.listen()

↓

Server Running
2️⃣ app.js
Purpose

Ye Express application banata hai.

Saare Routes isi file me likhe jaate hain.

const express = require("express");
const noteModel = require("./modules/note.model");

const app = express();

app.use(express.json());

module.exports = app;
express()
const app = express();

Express application create karta hai.

Is object ke through routes likhte hain.

Middleware
app.use(express.json());

Ye middleware request ke JSON data ko

req.body

me convert karta hai.

Example

Client

{
    "title":"Java",
    "description":"Complete Notes"
}

Server

req.body

Output

{
title:"Java",
description:"Complete Notes"
}
app.use() kya hota hai?

Middleware hota hai.

Request aur Response ke beech execute hota hai.

Flow

Client

↓

Middleware

↓

Route

↓

Response
3️⃣ db.js

Purpose

MongoDB Atlas se connection banana.

const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb_url");

    console.log("Database Connected");
}

module.exports = connectDB;
mongoose.connect()

Ye MongoDB Atlas ke server se connection establish karta hai.

Syntax

mongoose.connect(URL);
await

Suppose

Database ko connect hone me

2 sec

lagte hain.

Agar await nahi lagaya

Server Start

↓

Database Connect

↓

Error

Ho sakta hai server pehle start ho jaye.

Isliye

await

lagate hain.

Meaning

Jab tak database connect na ho jaye tab tak next line execute mat karo.

4️⃣ Mongoose

Mongoose ek ODM hai.

ODM

Object Data Modelling

Ye JavaScript Object ko MongoDB Document me convert karta hai.

Without Mongoose

MongoDB

↓

Complex Queries

With Mongoose

JavaScript Object

↓

Mongoose

↓

MongoDB
5️⃣ Schema

Schema batata hai

Document me kaunsi fields hongi.

Example

const notesSchema = new mongoose.Schema({

    title:String,

    description:String

});

Meaning

Har Note me

title

description

ye dono fields hongi.

Schema Diagram
Note

↓

title

↓

description
6️⃣ Model

Model database ke collection ko represent karta hai.

const noteModel = mongoose.model("note", notesSchema);

Yahan

Collection Name

↓

notes

Automatically plural ban jata hai.

Export
module.exports = noteModel;

Taaki doosri files use kar saken.

7️⃣ Create API
POST /notes

Purpose

Database me naya note add karna.

Correct Code

app.post("/notes", async (req, res) => {

    const data = req.body;

    await noteModel.create({

        title: data.title,

        description: data.description

    });

    res.status(201).json({

        success: true,

        message: "Note Added Successfully"

    });

});
create()

Database me document insert karta hai.

Example

POST

↓

Create

↓

Database
8️⃣ Read API
GET /notes

Purpose

Database ke saare notes lana.

app.get("/notes", async (req,res)=>{

    const notes=await noteModel.find();

    res.status(200).json({

        success:true,

        data:notes

    });

});
find()

Saare documents return karta hai.

Collection

↓

find()

↓

Array
CRUD
Operation	HTTP Method	Function
Create	POST	create()
Read	GET	find()
Update	PUT	findByIdAndUpdate()
Delete	DELETE	findByIdAndDelete()
Request Flow
Client

↓

Express

↓

Route

↓

Mongoose

↓

MongoDB

↓

Response
Common Mistakes (Jo tumhare code me bhi the)
❌ Wrong
mogoose.model()

✅ Correct

mongoose.model()
❌ Wrong
await noteModel.create(data)({

})

✅ Correct

await noteModel.create({
title:data.title,
description:data.description
})
❌ Wrong
connectDB;

✅ Correct

connectDB();
❌ Wrong

Schema close nahi kiya.

const notesSchema = new mongoose.Schema({

})

Always

});

lagana hota hai.

Interview Questions
Q1 Mongoose kya hai?

Node.js aur MongoDB ke beech ODM Library.

Q2 Schema kya hota hai?

Database document ka blueprint.

Q3 Model kya hota hai?

Schema ka object jiske through CRUD operations perform karte hain.

Q4 Middleware kya hota hai?

Request aur Response ke beech execute hone wala function.

Q5 express.json() kya karta hai?

JSON data ko req.body me convert karta hai.

Q6 await kyun use karte hain?

Async task complete hone tak next line ko wait karwane ke liye.

Q7 app.listen() kya karta hai?

Specified port par Express server start karta hai.

🔥 Super Easy Revision (30 Seconds)
server.js
↓

Database Connect

↓

app.js

↓

Middleware

↓

Routes

↓

Model

↓

Schema

↓

MongoDB

↓

Response
1️⃣ Express Application
const express = require('express');
const app = express();
Explanation
express → Express package ko import karta hai.
app → Express Application Object hai.
Isi object ke through routes aur middleware likhte hain.

Flow

Express

↓

app

↓

Routes

↓

Response
2️⃣ Middleware
app.use(express.json());
Definition

Middleware ek function hota hai jo

Request aur Response ke beech execute hota hai.

express.json()

Client se JSON data receive karta hai aur usse

req.body

me convert kar deta hai.

Example

Client

{
"title":"Java",
"description":"Notes"
}

Server

req.body

Output

{
title:"Java",
description:"Notes"
}
3️⃣ CRUD Operations

CRUD ka matlab

Letter	Meaning
C	Create
R	Read
U	Update
D	Delete
4️⃣ POST API

Purpose

Database me naya note insert karna.

app.post('/notes',async(req,res)=>{

})

Insert

await noteModel.create({

title:data.title,

description:data.description

})
create()

Database me document insert karta hai.

Return Type

Inserted Object
5️⃣ GET API

Purpose

Database ke saare notes fetch karna.

const notes = await noteModel.find();
find()

Collection ke saare documents fetch karta hai.

Return Type

[
 {},
 {},
 {}
]

Always

Array
6️⃣ findOne()

Purpose

Sirf ek matching document fetch karna.

const note = await noteModel.findOne({

title:"Java"

})

Return

{
title:"Java",

description:"Backend"
}

Agar document exist nahi kare

null

Return Type

Object OR null
find() vs findOne()
find()	findOne()
Multiple Documents	Single Document
Array Return	Object Return
[]	{} / null
7️⃣ Status Codes
Status Code	Meaning
200	Success
201	Created Successfully
400	Bad Request
404	Not Found
500	Internal Server Error

Example

res.status(201)

Meaning

Successfully Created
8️⃣ JSON Response
res.status(200).json({

success:true,

message:"Done"

})

Response hamesha JSON me bhejna best practice hai.

9️⃣ req.body

Client jo data bhejta hai

↓

req.body

↓

Database

Example

Client

{

"title":"React",

"description":"Hooks"

}

Server

req.body.title

req.body.description
🔟 Model
const noteModel = require("./modules/note.model");

Model ka kaam

Database ke Collection par CRUD operations perform karna.

Without Model

No CRUD
1️⃣1️⃣ Schema

Schema

Database ka Blueprint hota hai.

const noteSchema = new mongoose.Schema({

title:String,

description:String

})

Matlab

Har Document me

title

description

ye dono fields hongi.

1️⃣2️⃣ app.listen()
app.listen(3000)

Meaning

Server

localhost:3000

par run karega.

1️⃣3️⃣ module.exports

Export

module.exports = app;

Import

const app = require("./app");

Purpose

Ek file ka code dusri file me use karna.

1️⃣4️⃣ await
await noteModel.find();

Meaning

Pehle Database ka response aane do

Fir next line execute karo.

1️⃣5️⃣ Async
async(req,res)=>{

}

Database operations asynchronous hote hain.

Isliye

async

+

await

use karte hain.

1️⃣6️⃣ Complete Request Flow
Client

↓

Express Server

↓

Middleware

↓

Route

↓

Model

↓

MongoDB

↓

Response
1️⃣7️⃣ Database Flow
Client

↓

POST Request

↓

req.body

↓

create()

↓

MongoDB

↓

Response
1️⃣8️⃣ Read Flow
Client

↓

GET Request

↓

find()

↓

MongoDB

↓

Array

↓

Response
1️⃣9️⃣ findOne() Flow
Client

↓

findOne()

↓

Condition Match

↓

Object

OR

null
2️⃣0️⃣ Important Functions
Function	Work
express()	Create Express App
express.json()	JSON Middleware
app.use()	Register Middleware
app.post()	Create Route
app.get()	Read Route
create()	Insert Data
find()	Fetch All Documents