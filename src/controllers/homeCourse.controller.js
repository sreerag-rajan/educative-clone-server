const express = require("express");
const HomeCourses = require("../models/homeCourses.model");

const router = express.Router();

router.post("", async (req,res)=>{
    try{
        let homeCourse = await HomeCourses.create(req.body)

        return res.status(201).send(homeCourse);

    }
    catch(er){
        return res.status(500).send(er.message);
    }
})

router.get("", async (req,res)=>{
    try{
        const homeCourses = await HomeCourses.find().lean().exec();
        return res.send(homeCourses);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.patch("/:id", async(req,res)=>{
    try{
        const course = await HomeCourses.findByIdAndUpdate(req.params.id, req.body).lean().exec();
        return res.status(203).send(course);

    }
    catch(er){
        return res.status(500).send(er.message)
    }
})

router.delete("/:id", async (req,res)=>{
    try{
        const course = await HomeCourses.findByIdAndDelete(req.params.id).lean().exec();
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
        const course = await HomeCourses.findById(req.params.id).lean().exec();
        return res.status(200).send(course);
    }
    catch(er){
        return res.status(500).send(er.message)
    }
})
*/



module.exports = router;