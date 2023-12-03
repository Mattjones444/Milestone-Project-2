/* Array of Questions */

const myQuestions = [
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
];

function generateRandomIndex() {
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

function checkAnswerAndGenerateNewQuestion(selectedAnswer) {
    var currentQuestion = myQuestions[randomIndex];
    var correctAnswer = currentQuestion.correctAnswer;

    if (selectedAnswer === correctAnswer) {
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('score-display');
        scoreWrapper.text("Correct Answer");
        setTimeout(function () {
            $("#score-display").removeClass("score-display");
        }, 2000);
        console.log("Correct!");
    } else {
        var scoreWrapper = $('#score-display');
        scoreWrapper.empty();
        scoreWrapper.addClass('no-score-display');
        scoreWrapper.text("Incorrect! The correct answer is: " + correctAnswer);
        setTimeout(function () {
            $("#score-display").removeClass("no-score-display");
        }, 2000);
    };

    questionCounter++;

    if (questionCounter == totalQuestions) {
        $('#answer-wrapper').hide();
        $('question-wrapper').hide();
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
});
