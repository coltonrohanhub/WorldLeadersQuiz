const questionContainer = document.getElementById('question-container');
const start = document.getElementById('startButton');
const results = document.getElementById('title');
const answerButton = document.getElementById('answerButton');
const next = document.getElementById('nextButton');
const questionElement = document.getElementById('question');

let shuffledQuestions;
let currentQuestionIndex;
let score = 0;

start.addEventListener('click', startGame);
next.addEventListener('click', () => {
  currentQuestionIndex++;
  nextQuestion();
})


function nextQuestion() {
  resetGame();
  askQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startGame() {
  results.innerText = "Test your Knowledge of the world leaders!"
  start.classList.add('hidden');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hidden');
  nextQuestion();
}

function askQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButton.appendChild(button);
  })
}

function resetGame() {
  clearClass(document.body);
  next.classList.add('hidden');
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(userAnswer) {
  const selectedButton = userAnswer.target;
  const correct = selectedButton.dataset.correct;
  if(correct){
    score++
  }
  setClass(document.body, correct);
  Array.from(answerButton.children).forEach(button => {
    setClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    next.classList.remove('hidden');
  }  
  else {
    {
        start.innerText = 'Restart'
        start.classList.remove('hidden')
        questionContainer.classList.add('hidden')
        if(score <= 3){
          results.innerText = "You scored third world country, you need to improve your knowlege!";

        } else if(score <= 6 && score > 3){
          results.innerText = "You scored second world country, your knowledge is powerful!";

        }else if(score <= 8 && score > 6){
          results.innerText = "You scored first world country, thats impressive!";
        
        }else if(score === 9 ){
          results.innerText = "You scored out of this world, thats a perfect score!";
        }
        
        
        score = 0
    }
  
}
}

function setClass(element, correct) {
  clearClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'What country does Xi Jinping rule?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'China', correct: true },
      { text: 'Korea', correct: false },
      { text: 'Thiland', correct: false }
    ]
  },
  {
    question: 'What country does Vladimir Putin rule?',
    answers: [
      { text: 'China', correct: false },
      { text: 'Germany', correct: false },
      { text: 'Russia', correct: true },
      { text: 'Serbia', correct: false }
    ]
  },
  {
    question: 'What country does Angela Merkel rule?',
    answers: [
      { text: 'USA', correct: false },
      { text: 'Russia', correct: false },
      { text: 'Germany', correct: true },
      { text: 'Denmark', correct: false }
    ]
  },
  {
    question: 'What country does Joe Biden rule?',
    answers: [
      { text: 'USA', correct: true },
      { text: 'Germany', correct: false },
      { text: 'Mexico', correct: false },
      { text: 'South America', correct: false }
    ]
  },
  {
    question: 'What country does Mette Frederiksen rule?',
    answers: [
      { text: 'South America', correct: false },
      { text: 'France', correct: false },
      { text: 'Poland', correct: false },
      { text: 'Denmark', correct: true }
    ]
  },
  {
    question: 'What country does Emmanuel Macron rule?',
    answers: [
      { text: 'Denmark', correct: false },
      { text: 'Poland', correct: false },
      { text: 'France', correct: true },
      { text: 'Japan', correct: false }
    ]
  },
  {
    question: 'What country does Yoshihide Suga rule?',
    answers: [
      { text: 'Korea', correct: false },
      { text: 'Italy', correct: false },
      { text: 'Japan', correct: true },
      { text: 'China', correct: false }
    ]
  },
  {
    question: 'What country does Boris Johnson rule?',
    answers: [
      { text: 'United States', correct: false },
      { text: 'United Emirates', correct: false },
      { text: 'United Kingdom', correct: true },
      { text: 'United Airlines', correct: false }
    ]
  },
  {
    question: 'What country does Mario Draghi rule?',
    answers: [
      { text: 'Korea', correct: false },
      { text: 'Italy', correct: true },
      { text: 'USA', correct: false },
      { text: 'Mexico', correct: false }
    ]
  }
]