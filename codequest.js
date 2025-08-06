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

const questionEl= document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn =document.getElementById("next-btn")
const result El = document.getElementById("result");

