require("dotenv").config()
const express = require("express")
const connect = require("./configs/db")

const app = express();

app.use(express.json())


app.listen(process.env.PORT||2345, async ()=>{
    try{
        await connect()
        console.log("Mongo connected")
    }
    catch(er){
        console.log(er)
    }
    console.log("listening on port 2345")
})