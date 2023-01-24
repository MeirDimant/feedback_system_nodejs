const express = require("express");
const router = express.Router();
const Evaluation = require("../models/evaluation");

// Route to create a new evaluation
router.post("/evaluation", async (req, res) => {
  const evaluation = new Evaluation({
    teacher: req.body.teacher,
    course: req.body.course,
    grade: req.body.grade,
  });
  try {
    const savedEvaluation = await evaluation.save();
    res.json(savedEvaluation);
  } catch (err) {
    res.json({ message: err });
  }
});

// Route to view average scores
router.get("/scores", async (req, res) => {
  try {
    const scores = await Evaluation.aggregate([
      {
        $group: {
          _id: { teacher: "$teacher", course: "$course" },
          average: { $avg: "$grade" },
        },
      },
    ]);
    res.json(scores);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
