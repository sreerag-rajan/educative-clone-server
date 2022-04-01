require("dotenv").config()
const express = require("express")
const connect = require("./configs/db")

const app = express();

const homeCourseController = require("./controllers/homeCourse.controller");
const exploreController = require("./controllers/explore.controller");

app.use(express.json())

app.use("/homecourses", homeCourseController)
app.use("/explores", exploreController)


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