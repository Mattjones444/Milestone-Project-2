/* Array of Questions */

/*const myQuestions = [
    {
        question: "3 x 3",
        answers: {
            a: "3",
            b: "9",
            c: "12",
            d: "36",
        },
        correctAnswer: "9",
    },
    {
        question: "3 x 6",
        answers: {
            a: "18",
            b: "12",
            c: "30",
            d: "10",
        },
        correctAnswer: "18",
    },
    {
        question: "3 x 9",
        answers: {
            a: "18",
            b: "3",
            c: "33",
            d: "27",
        },
        correctAnswer: "27",
    },
    {
        question: "3 x 1",
        answers: {
            a: "21",
            b: "9",
            c: "3",
            d: "30",
        },
        correctAnswer: "3",
    },
    {
        question: "3 x 2",
        answers: {
            a: "21",
            b: "9",
            c: "3",
            d: "6",
        },
        correctAnswer: "6",
    },
    {
        question: "3 x 4",
        answers: {
            a: "18",
            b: "12",
            c: "0",
            d: "33",
        },
        correctAnswer: "12",
    },
    {
        question: "3 x 5",
        answers: {
            a: "24",
            b: "27",
            c: "15",
            d: "30",
        },
        correctAnswer: "15",
    },
    {
        question: "3 x 7",
        answers: {
            a: "6",
            b: "27",
            c: "21",
            d: "36",
        },
        correctAnswer: "21",
    },
    {
        question: "3 x 8",
        answers: {
            a: "6",
            b: "24",
            c: "21",
            d: "3",
        },
        correctAnswer: "24",
    },
    {
        question: "3 x 10",
        answers: {
            a: "30",
            b: "12",
            c: "15",
            d: "3",
        },
        correctAnswer: "30",
    },
    {
        question: "3 x 11",
        answers: {
            a: "33",
            b: "30",
            c: "15",
            d: "36",
        },
        correctAnswer: "33",
    },
    {
        question: "3 x 12",
        answers: {
            a: "24",
            b: "27",
            c: "18",
            d: "36",
        },
        correctAnswer: "36",
    },
]; */


let operand1 = 3;
let operand2;
const totalQuestions = 10;
let questionCounter = 0;
let score = 0;
let lives = 3;
let correctAnswer;

function generateQuestion() {
  let operand2 = Math.floor(Math.random() * 13);
  let questionText = operand1 + " x " + operand2;
return questionText;
};

$(document).ready(function() {
generateQuestion();
  let question = generateQuestion();
 $(".question-box").text(question);
    function generateRandomMultipleOfThree() {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      return Math.ceil(randomNumber / 3) * 3;
    };

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
     let correctAnswer = operand1 * operand2;
    return correctAnswer;
  };
   
  correctAnswer = calculateAnswer();

    $(".answer-option").on("click", function() {
      calculateAnswer();
      const selectedAnswer = $(this).text();
      if (selectedAnswer === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log("Incorrect!");
      }
      generateQuestionAndOptions();
    })});

function increaseScore() {
  let scoreContainer = $('.score-tracker');
  score++;
  scoreContainer.text(`Score: ${score}`);
};

function loseLife() {
  let livesContainer = $('.lives-tracker');
  lives--;
livesContainer.text(`Lives: ${lives}`);
};

/*function checkAnswerAndGenerateNewQuestion(selectedAnswer) {
    var currentQuestion = myQuestions[randomIndex];
    var correctAnswer = currentQuestion.correctAnswer;
    if (selectedAnswer === correctAnswer) {
        increaseScore();
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('score-display');
        scoreWrapper.text("Correct Answer");
        setTimeout(function () {
            $("#score-display").removeClass("score-display");
          scoreWrapper.text("");
        }, 2000);
        console.log("Correct!");
    } else {
       loseLife();
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('no-score-display');
        scoreWrapper.text("Incorrect! The correct answer is: " + correctAnswer);
        setTimeout(function () {
            $("#score-display").removeClass("no-score-display");
          scoreWrapper.text("");  
        }, 2000);
    };

    if (lives === 0) {
      $('.question-box').hide();
      $('.answer-wrapper').hide();
       $('#question-answer').addClass('end-game-lose');
    };

    questionCounter++;

    if (questionCounter == totalQuestions) {
      $('#question-answer').text("Well Done! You got "  + score +  "out of " + totalQuestions + " questions correct!");

    } else {
        generateNewQuestion();
        $('.answer-option').off('click').on('click', function () {
            var selectedAnswer = $(this).text();
            checkAnswerAndGenerateNewQuestion(selectedAnswer);
        });
    };
};





 /*function generateRandomIndex() {
    var randomIndex = Math.floor(Math.random() * myQuestions.length);
    return randomIndex;
};

function populateQuestionDescription(question) {
    $(".question-box").text(question.question);
};

function populateAnswerOptions(question) {
    var answerWrapper = $(".answer-wrapper");
    answerWrapper.empty();
    for (var key in question.answers) {
        var answerText = question.answers[key];
        answerWrapper.append(
            `<button class="answer-option" data-answer="${key}">${answerText}</button>`
        );
    };
};



function generateNewQuestion() {
    randomIndex = generateRandomIndex();
    populateQuestionDescription(myQuestions[randomIndex]);
    populateAnswerOptions(myQuestions[randomIndex]);

};

function init() {
    generateNewQuestion();
};

init();

const totalQuestions = 10;
let questionCounter = 0;
let score = 0;
let lives = 3;

function increaseScore() {
  let scoreContainer = $('.score-tracker');
  score++;
  scoreContainer.text(`Score: ${score}`);
};

function loseLife() {
  let livesContainer = $('.lives-tracker');
  lives--;
livesContainer.text(`Lives: ${lives}`);
};


  function checkAnswerAndGenerateNewQuestion(selectedAnswer) {
    var currentQuestion = myQuestions[randomIndex];
    var correctAnswer = currentQuestion.correctAnswer;
    if (selectedAnswer === correctAnswer) {
        increaseScore();
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('score-display');
        scoreWrapper.text("Correct Answer");
        setTimeout(function () {
            $("#score-display").removeClass("score-display");
          scoreWrapper.text("");
        }, 2000);
        console.log("Correct!");
    } else {
       loseLife();
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('no-score-display');
        scoreWrapper.text("Incorrect! The correct answer is: " + correctAnswer);
        setTimeout(function () {
            $("#score-display").removeClass("no-score-display");
          scoreWrapper.text("");  
        }, 2000);
    };

    if (lives === 0) {
      $('.question-box').hide();
      $('.answer-wrapper').hide();
       $('#question-answer').addClass('end-game-lose');
    };

    questionCounter++;

    if (questionCounter == totalQuestions) {
      $('#question-answer').text("Well Done! You got "  + score +  "out of " + totalQuestions + " questions correct!");
        
    } else {
        generateNewQuestion();
        $('.answer-option').off('click').on('click', function () {
            var selectedAnswer = $(this).text();
            checkAnswerAndGenerateNewQuestion(selectedAnswer);
        });
    };
};

// Initial setup of event handler
$('.answer-option').on('click', function () {
    var selectedAnswer = $(this).text();
    checkAnswerAndGenerateNewQuestion(selectedAnswer);
});*/

