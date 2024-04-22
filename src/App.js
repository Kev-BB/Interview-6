import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris",
    ],
    correct: 0,
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix",
    ],
    correct: 0,
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing",
    ],
    correct: 0,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const handleAnswer = (answerIndex) => {
    if (answerIndex === QUESTIONS[currentIndex].correct) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handleRestart = () =>{
    setCurrentIndex(0)
    setScore(0)
  }
  return (
    <>
      <h1 className="flex justify-center m-8 text-4xl font-bold">Quiz App</h1>
      <Quiz
        questions={QUESTIONS}
        currentIndex={currentIndex}
        score={score}
        onAnswer={handleAnswer}
        onRestart={handleRestart}
      />
    </>
  );
}
const Quiz = ({ questions, currentIndex, score, onAnswer, onRestart }) => {
  // Check if all questions have been answered
  if (currentIndex === questions.length) {
    return (
      <>
        <div className="flex items-center justify-center flex-col">
          <h2>Quiz Bitti!</h2>
          <p>
            Toplam Puanınız: {score} / {questions.length}
          </p>
          <button className="border-solid border-gray-800 rounded bg-gray-50 border-2 p-1 text-black" onClick={onRestart}>Tekrar oyna</button>
        </div>
      </>
    );
  }
  const question = questions[currentIndex];
  return (
    <div className="container flex items-center justify-center flex-col rounded-2xl bg-violet-700 border-solid border-violet-500 border-2 w-80 h-80 p-8 ">
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li className="mt-2" key={index}>
            <button onClick={() => onAnswer(index)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
