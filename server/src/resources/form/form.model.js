const mongoose = require("mongoose");
const { Schema } = mongoose;
const formSchema = new Schema(
  {
    emp: { type: String, required: true, unique: true },
    tipo: { type: String },
  },
  { timestamps: true }
);

const Form = mongoose.model("form", formSchema);

module.exports = Form;
