const mongoose = require("mongoose");

const exploreSchema = new mongoose.Schema({
    courseName:{type:String, required:true},
    imageUrl : {type:String, required:true},
    courseBy: {type: String, required:true},
    instructorAvatar: {type:String, required:false},
    level: {type:String, required:true},
    coursetype : {type:String, required:true},
    price: {type:Number, required:false},
    subject: {type:String, required:true}
},{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model("explore", exploreSchema);