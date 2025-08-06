const quizQuestions = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    correctAnswer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correctAnswer: "//"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What will the expression `typeof 42` return?",
    options: ["number", "string", "boolean", "undefined"],
    correctAnswer: "number"
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    correctAnswer: ".push()"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", () => selectAnswer(button, currentQuestion.correctAnswer));
    optionsEl.appendChild(button);
  });
}

function selectAnswer(selectedButton, correctAnswer) {
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(button => {
    button.classList.add("disabled");

    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }

    if (button !== selectedButton && button.textContent !== correctAnswer) {
      button.style.opacity = "0.6";
    }
  });

  if (selectedButton.textContent === correctAnswer) {
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("box-container").innerHTML = `
    <div id="box-title">Quiz Complete!</div>
    <div id="result">You scored ${score} out of ${quizQuestions.length}</div>
  `;
}

showQuestion();
