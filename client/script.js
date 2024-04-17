document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const quizContainer = document.querySelector(".quiz-container");
  // Fetch quiz data from the backend
  fetch("http://localhost:5000/getQuiz")
    .then((response) => response.json())
    .then((quizData) => {
      quizData.data.forEach((question) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = question.question;

        const optionsList = document.createElement("ul");
        question.options.forEach((option) => {
          const optionItem = document.createElement("li");
          const optionInput = document.createElement("input");
          optionInput.type = "radio";
          optionInput.name = question._id; // Using question ID as the group name
          optionInput.value = option;
          optionItem.appendChild(optionInput);
          optionItem.appendChild(document.createTextNode(option));
          optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsList);
        form.insertBefore(questionDiv, form.lastElementChild);
      });
    })
    .catch((error) => console.error("Error fetching quiz data:", error));

  // Form submission handling
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const selectedAnswers = [];
    formData.forEach((value, key) => {
      selectedAnswers.push({ questionId: key, answer: value });
    });

    // Send selectedAnswers to the backend for scoring
    fetch("http://localhost:5000/submitQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedAnswers),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        displayQuizResult(result.data);
        form.reset();
      })
      .catch((error) => console.error("Error submitting quiz answers:", error));
  });

  // Reset button handling
  form.addEventListener("reset", () => {
    const radioInputs = form.querySelectorAll("input[type='radio']");
    radioInputs.forEach((input) => {
      input.checked = false;
    });
  });

  // Function to display quiz result
  // Function to display quiz result
  function displayQuizResult(result) {
    const resultPanel = document.createElement("div");
    resultPanel.classList.add("result-panel");

    const scoreText = document.createElement("p");
    scoreText.textContent = `Your Score: ${result.score}/${result.questions.length}`;
    resultPanel.appendChild(scoreText);

    const resultList = document.createElement("ol");
    result.questions.forEach((question) => {
      const listItem = document.createElement("li");
      listItem.textContent = question.question;

      const answersList = document.createElement("ul");
      const userAnswerItem = document.createElement("li");
      userAnswerItem.textContent = `Your answer: ${question.userAnswer}`;
      if (question.isCorrect) {
        userAnswerItem.style.color = "green";
      } else {
        userAnswerItem.style.color = "red";
        const correctAnswerItem = document.createElement("li");
        correctAnswerItem.textContent = `Correct answer: ${question.correctAnswer}`;
        correctAnswerItem.style.color = "green";
        answersList.appendChild(correctAnswerItem);
      }
      answersList.appendChild(userAnswerItem);
      listItem.appendChild(answersList);

      resultList.appendChild(listItem);
    });

    resultPanel.appendChild(resultList);
    quizContainer.appendChild(resultPanel);
  }

  // Function to hide quiz result panel
  function hideQuizResult() {
    const resultPanel = document.querySelector(".result-panel");
    if (resultPanel) {
      resultPanel.remove();
    }
  }
});
