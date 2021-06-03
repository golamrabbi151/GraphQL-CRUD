const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name:{
    type:String,
    trim:true
  } ,

    email:{ 
      type:String,
      trim:true
    } ,
    phone:{
      type:String,
      trim:true
    } ,
    dob:{
      type:String,
      trim:true
    },
    subject:{
      type:String,
      trim:true
    }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = { Student };
