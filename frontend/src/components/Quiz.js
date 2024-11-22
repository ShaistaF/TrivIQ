import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get('http://localhost:8000/api/questions/');
      setQuestions(response.data);
    }
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return <h2>Your final score: {score}/{questions.length}</h2>;
  }

  const question = questions[currentQuestion];
  return (
    <div>
      <h2>{question.text}</h2>
      {[question.correct_answer, ...question.wrong_answers].sort().map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswer(answer === question.correct_answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
