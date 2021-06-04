const {Schema,model} = require("mongoose")

const subjectSchema = new Schema({
    name:{
        type:String,
    }
})

const Subject = model("Subject", subjectSchema);

module.exports = { Subject };