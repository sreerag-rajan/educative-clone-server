const express = require("express");
const Explore = require("../models/explore.model");

const router = express.Router();

router.post("", async (req,res)=>{
    try{
        let explore = await Explore.create(req.body)

        return res.status(201).send(explore);

    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

router.get("", async (req,res)=>{
    try{
        const explores = await Explore.find().lean().exec();
        return res.send(explores);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.patch("/:id", async(req,res)=>{
    try{
        const course = await Explore.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(203).send(course);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.delete("/:id", async (req,res)=>{
    try{
        const course = await Explore.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(205).send(course);

    }
    catch(er){
        return res.status(500).send(er.message);
    }
})


//IF this feature is ever to be implemented then this path will be used
/*
router.get("/homeCourses/:id", async (req,res)=>{
    try{
        const course = await Explore.findById(req.params.id).lean().exec();
        return res.status(200).send(course);
    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
*/



module.exports = router;