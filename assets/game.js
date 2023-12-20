
// Global Variables
$(document).ready(function() {
  let operand1 = 3;
  let questionCounter = 0;
  let score = 0;
  let lives = 3;
  let correctAnswer;
  const totalQuestions = 10;
  // Generate Question
  function generateRandomMultipleOfThree() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return Math.ceil(randomNumber / 3) * 3;
  }

  function generateQuestionAndOptions() {
    operand2 = Math.floor(Math.random() * 13);
    correctAnswer = operand1 * operand2;

    // Generate unique incorrect answers
    const incorrectAnswers = [];
    while (incorrectAnswers.length < 3) {
      const incorrectAnswer = generateRandomMultipleOfThree();
      if (incorrectAnswer !== correctAnswer && !incorrectAnswers.includes(incorrectAnswer)) {
        incorrectAnswers.push(incorrectAnswer);
      }
    }

    const answerOptions = [correctAnswer, ...incorrectAnswers];
    answerOptions.sort(() => Math.random() - 0.5);
    // Set Question Format
    const questionText = operand1 + " x " + operand2;
    // Push question and answers into divs
    $(".question-box").text(questionText);
    $(".answer-option:eq(0)").text(answerOptions[0]);
    $(".answer-option:eq(1)").text(answerOptions[1]);
    $(".answer-option:eq(2)").text(answerOptions[2]);
    $(".answer-option:eq(3)").text(answerOptions[3]);
  }
  generateQuestionAndOptions();
  // Calculates the correct answer
  function calculateAnswer() {
    correctAnswer = operand1 * operand2;
    return correctAnswer;
  }
  // Increases the score counter
  function increaseScore() {
    let scoreContainer = $(".score-tracker");
    score++;
    scoreContainer.text(`Score: ${score}`);
  }
  // Decreases the lives counter on incorrect input
  function loseLife() {
    let livesContainer = $(".lives-tracker");
    lives--;
    livesContainer.text(`Lives: ${lives}`);
  }
  // Informs the user they have inputted the correct answer
  function showCorrect() {
    var scoreWrapper = $("#score-display");
    scoreWrapper.empty();
    scoreWrapper.addClass("score-display");
    scoreWrapper.text("Correct Answer");
    setTimeout(function() {
      $("#score-display").removeClass("score-display");
      scoreWrapper.text("");
    }, 2000);
  }
  // Informs the user their answer was incorrect and tells them the correct answer
  function showIncorrect() {
    var scoreWrapper = $("#score-display");
    scoreWrapper.empty();
    scoreWrapper.addClass("no-score-display");
    scoreWrapper.text("Incorrect! The correct answer is: " + correctAnswer);
    setTimeout(function() {
      $("#score-display").removeClass("no-score-display");
      scoreWrapper.text("");
    }, 2000);
  }
  // Displays an image when lives reach 0
  function livesEnd() {
    if (lives === 0) {
      $(".question-box").hide();
      $(".answer-wrapper").hide();
      $("#question-answer").addClass("end-game-lose");
    }
  }
  // Informs the user of their overall score after 10 questions
  function questionEnd() {
    if (questionCounter == totalQuestions) {
      $("#question-answer").text("Well Done! You got " + score + "out of " + totalQuestions + " questions correct!");
    }
  }

  questionCounter++;
  $(".answer-option").on("click", function() {
    calculateAnswer();
    let selectedAnswer = $(this).text();
    let selectedAnswerNumber = parseInt(selectedAnswer, 10);
    if (selectedAnswerNumber === correctAnswer) {
      increaseScore();
      generateQuestionAndOptions();
      showCorrect();
      questionEnd();
    } else {
      loseLife();
      showIncorrect();
      livesEnd();
      questionEnd();
    }
    questionCounter++;
    generateQuestionAndOptions();
  });
});









 

