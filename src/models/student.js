const { Schema, model } = require("mongoose");

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
    subject:[{
      type:String
    }]
    // subject:[{
    //   type:Schema.Types.ObjectId,
    //   ref:"Subject"
    // }]
});

const Student = model("Student", StudentSchema);

module.exports = { Student };
