// Trivia questions
const questions = [
  { question: "What is causing crops to die?", options: ["drought", "All of the above", "pest", "Too much moisture"], answer: 1 },
  { question: "Why is there not enough food being produced?", options: ["No one is sharing", "None of the above", "climate shock", "Not enough water"], answer: 1 },
  { question: "Why do some places in the world have more food than others?", options: ["people are robbing food from being delivered to places", "food isnt being distributed properly", "people are taking more food for themselves", "special privileges"], answer: 1 },
  { question: "what are some impacts that food scarcity have?", options: ["difficulty concentrating", "all of the above", "low energy", "missing school or work due to illness"], answer: 1 },
  { question: "Do restaurants and fast food places reduce portions of food?", options: ["False", "True"], answer: 1 },
  { question: "Should we care about food scarcity?", options: ["No", "Yes",], answer: 1 },
  { question: "What Age Group Requires Nutritious Meals To Have a Healthy Mind And Body?", options: ["Teens", " All Ages", "Adults", "Kids"], answer: 1 },
  { question: "Is A Cycle Of Bad Health And Bad Hygiene Easy To Overcome?", options: ["Only Health", "Yes", "No", "Only Hygeine"], answer: 1 },
  { question: "Food Insecurity Can Lead Too?", options: ["Type 2 Diabetes", "All Of The Above", "High Blood Pressure", "Heart Disease"], answer: 1 },
  { question: "Does Food Scarcity Play An Affect Into A Students Academic Performance?", options: ["No", "Yes"], answer: 1 },
  { question: "Which Is The Effect Of A Child With Limited Food Access? ", options: ["Poor Health", "Both", "Bad Academic Performance", "Neither"], answer: 1 },
  { question: "How Many Kids Are Unsure Of When They Will Get Their Next Meal?", options: ["1 in 1,000", "1 in 5", "1 in 1,000,000", "1 in 10,000,000"], answer: 1 },
  { question: "Approximately How Many Children Went Hungry In 2022?", options: [" 4 Million", "More 3 Million", "2 Million", "1 Million"], answer: 1 },
];

let currentQuestionIndex = 0;
let score = 0;

const homeScreen = document.getElementById("home-screen");
const questionScreen = document.getElementById("question-screen");
const feedbackScreen = document.getElementById("feedback-screen");
const conclusionScreen = document.getElementById("conclusion-screen");

const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackMessage = document.getElementById("feedback-message");
const finalScore = document.getElementById("final-score");

const startBtn = document.getElementById("start-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const restartBtn = document.getElementById("restart-btn");

// Start quiz
startBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  showScreen(questionScreen);
});

// Show question and options
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    optionsContainer.appendChild(button);
  });
}
const correctSound = new Audio('ding.mp3');
const wrongSound = new Audio('buzzer.mp3');

// Handle answer selection
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    feedbackTitle.textContent = "Correct!";
    feedbackMessage.textContent = "Good job!";
    correctSound.play();
  } else {
    feedbackTitle.textContent = "Incorrect!";
    feedbackMessage.textContent = `The correct answer was: ${currentQuestion.options[currentQuestion.answer]}`;
    wrongSound.play();
  }
  showScreen(feedbackScreen);
}

// Move to next question or show conclusion screen
nextQuestionBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    showScreen(questionScreen);
  } else {
    finalScore.textContent = `Your final score: ${score}/${questions.length}`;
    showScreen(conclusionScreen);
  }
});

// Restart quiz
restartBtn.addEventListener("click", () => {
  showScreen(homeScreen);
});

// Switch screens
function showScreen(screen) {
  document.querySelectorAll(".screen").forEach((scr) => scr.classList.remove("active"));
  screen.classList.add("active");
}