const questions = [
  {
    category: "Geografia",
    question: "Qual é a capital da França?",
    choices: ["Londres", "Berlim", "Paris"],
    answer: "Paris"
  },
  {
    category: "Ciência",
    question: "Qual é o elemento químico mais abundante no universo?",
    choices: ["Oxigênio", "Hidrogênio", "Hélio"],
    answer: "Hidrogênio"
  },
  {
    category: "História",
    question: "Em que ano o homem pisou na Lua pela primeira vez?",
    choices: ["1965", "1969", "1972"],
    answer: "1969"
  },
  {
    category: "Tecnologia",
    question: "Qual linguagem de programação é primordialmente executada em navegadores web?",
    choices: ["Python", "C#", "JavaScript"],
    answer: "JavaScript"
  },
  {
    category: "Artes",
    question: "Quem pintou a Mona Lisa?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    answer: "Leonardo da Vinci"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
