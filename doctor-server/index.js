const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const app = express();

app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://doctorruhit:CG5TUkjG7fsOvAHI@datafind.xfgov3s.mongodb.net/?retryWrites=true&w=majority&appName=datafind";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const usercollection = client.db("doctorInfosDB").collection("userInfo");

    app.post("/jwt", async(req, res)=>{
        const users = req.body;        
        const isExist = await usercollection.findOne(users);
        console.log(isExist)
        if(isExist){
            const tokens = jwt.sign(users, "dakfakdsfaidfakdfa4df5a4df8a5sdf5ad4f", {expiresIn : '1hr'})
            return res.send({token : tokens})
        }
    })

    app.post("/addDoctor", (req, res)=>{
        userInfo
    })

    app.post("/finds", (req, res)=>{
        console.log(req.headers.authorization)
    })
    
    app.post("/adduser", async(req,res)=>{
        console.log(req.body)
        const users = req.body;
        console.log(users)
        const isExist = await usercollection.findOne(users)
        if(isExist){
            return res.send({message : "This user exist"})
        }
        const result = await usercollection.insertOne(users)
        res.send(result)
    })









  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



//doctorruhit
//CG5TUkjG7fsOvAHI



app.listen(5000, ()=>{
    console.log("this server is start")
})