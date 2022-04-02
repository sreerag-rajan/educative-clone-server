require("dotenv").config()
const cors = require("cors")
const mongoose =require("mongoose")
const express = require("express")
const connect = require("./configs/db")

const app = express();

const homeCourseController = require("./controllers/homeCourse.controller");
const exploreController = require("./controllers/explore.controller");

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.use("/homecourses", homeCourseController)
app.use("/explores", exploreController)
// here login line 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

// from here
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