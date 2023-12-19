
let operand1 = 3;
let questionCounter = 0;
let score = 0;
let lives = 3;
let correctAnswer;
const totalQuestions = 10;

function generateQuestion() {
  let operand2 = Math.floor(Math.random() * 13);
  let questionText = operand1 + " x " + operand2;
return questionText;
}

$(document).ready(function() {
generateQuestion();
  let question = generateQuestion();
 $(".question-box").text(question);
    function generateRandomMultipleOfThree() {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      return Math.ceil(randomNumber / 3) * 3;
    }

    function generateQuestionAndOptions() {
     operand1 = 3;
     operand2 = Math.floor(Math.random() * 13);
        correctAnswer = operand1 * operand2;
      const incorrectAnswer1 = generateRandomMultipleOfThree();
      const incorrectAnswer2 = generateRandomMultipleOfThree();
       const incorrectAnswer3 = generateRandomMultipleOfThree();
      const answerOptions = [correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3];
      answerOptions.sort(() => Math.random() - 0.5);

      const questionText = operand1 + " x " + operand2;

      $(".question-box").text(questionText);
      $(".answer-option:eq(0)").text(answerOptions[0]);
      $(".answer-option:eq(1)").text(answerOptions[1]);
      $(".answer-option:eq(2)").text(answerOptions[2]);
      $(".answer-option:eq(3)").text(answerOptions[3]);
    }
    generateQuestionAndOptions();

  function calculateAnswer(){
     correctAnswer = operand1 * operand2;
    return correctAnswer;
  }

  function increaseScore() {
    let scoreContainer = $(".score-tracker");
    score++;
    scoreContainer.text(`Score: ${score}`);
  }

  function loseLife() {
    let livesContainer = $(".lives-tracker");
    lives--;
  livesContainer.text(`Lives: ${lives}`);
  }

  function showCorrect(){
    var scoreWrapper = $("#score-display");
    scoreWrapper.empty();
    scoreWrapper.addClass("score-display");
    scoreWrapper.text("Correct Answer");
    setTimeout(function () {
        $("#score-display").removeClass("score-display");
      scoreWrapper.text("");
    }, 2000);
  }

  function showIncorrect(){
    var scoreWrapper = $("#score-display");
    scoreWrapper.empty();
    scoreWrapper.addClass("no-score-display");
    scoreWrapper.text("Incorrect! The correct answer is: " + correctAnswer);
    setTimeout(function () {
        $("#score-display").removeClass("no-score-display");
scoreWrapper.text("");},2000);
  }

 function livesEnd() {
    if (lives === 0) {
      $(".question-box").hide();
      $(".answer-wrapper").hide();
       $("#question-answer").addClass("end-game-lose");
}}
  function questionEnd() {
    if (questionCounter == totalQuestions) {
      $("#question-answer").text("Well Done! You got "  + score +  "out of " + totalQuestions + " questions correct!");
    }}
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
    })
  })









 

