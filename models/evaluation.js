const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  teacher: String,
  course: String,
  grade: Number,
});

module.exports = mongoose.model("Evaluation", evaluationSchema);
