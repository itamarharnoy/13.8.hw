const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name:String,
  subject:String,
  score:Number,
  dateCreated:{ type:Date, default:Date.now }
})

exports.StudentModel = mongoose.model("students", studentSchema)


exports.validateStudent = (reqBody) => {
  const joiSchema = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    subject:Joi.string().min(2).max(100).required(),
    score:Joi.number().min(1).max(100).required(),
  })
  return joiSchema.validate(reqBody);
}