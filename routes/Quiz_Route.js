const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz_Model");

//Add New Quiz Question

router.post("/addQuiz", async (req, res) => {
  try {
    if (!req.body.question || !req.body.options || !req.body.correctAnswer) {
      return res.send({
        status: false,
        message: "Invalid Parameters...",
      });
    }

    //Check if question already exist
    const checkQuestion = await Quiz.findOne({ question: req.body.question });

    if (checkQuestion) {
      return res.send({
        status: false,
        message: "Question already exists...",
      });
    }

    const newQuestion = new Quiz({
      question: req.body.question,
      options: req.body.options,
      correctAnswer: req.body.correctAnswer,
    });

    const saveResult = await newQuestion.save();
    console.log(`New Question Added`, saveResult);
    return res.send({
      status: true,
      message: "Question Added Successfully",
    });
  } catch (error) {
    console.log(`Error Occurred`, error.message);
    return res.send({
      status: false,
      message: error.message,
    });
  }
});

//Generates 10 random questions and send to frontend
router.get("/getQuiz", async (req, res) => {
  try {
    const response = await Quiz.aggregate([
      { $sample: { size: 10 } },
      { $limit: 10 },
    ]);

    return res.send({
      status: true,
      message: "Quiz fetched successfully",
      data: response,
    });
  } catch (error) {
    console.log(`Error Occurred`, error.message);
    return res.send({
      status: false,
      message: error.message,
    });
  }
});

//Get Quiz data from frontend and Validate Results
router.post("/submitQuiz", async (req, res) => {
  try {
    if (!req.body)
      return res.send({
        status: false,
        message: "Invalid Parameters",
      });
    const AnswerArray = req.body;

    const response = await Validation(AnswerArray);

    res.send({
      status: true,
      message: "Quiz submit success",
      data: response,
    });
  } catch (error) {
    console.log(`Error Occurred`, error.message);
    return res.send({
      status: false,
      message: error.message,
    });
  }
});

//Function to validate User Options
const Validation = async (AnswerArray) => {
  const questions = [];
  let score = 0;

  for (const element of AnswerArray) {
    const getQuestion = await Quiz.findById(element.questionId);

    if (!getQuestion) throw new Error("Invalid Question Id");

    let isCorrect = false;

    if (getQuestion.correctAnswer === element.answer) {
      score++;
      isCorrect = true;
    }

    questions.push({
      id: element.questionId,
      question: getQuestion.question,
      options: getQuestion.options,
      correctAnswer: getQuestion.correctAnswer,
      userAnswer: element.answer,
      isCorrect: isCorrect,
    });
  }

  const response = {
    questions: questions,
    score: score,
  };

  return response;
};

module.exports = router;
