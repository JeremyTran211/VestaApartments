import React, { useState } from "react";

const PersonalityQuiz = () => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Do you like to keep things tidy?",
      options: [
        { answer: "Always", score: 3 },
        { answer: "Most of the time", score: 2 },
        { answer: "Occasionally", score: 1 },
        { answer: "Never", score: 0 },
      ],
    },
    {
      question: "What are your hobbies?",
      options: [
        { answer: "Reading & Writing", score: 2 },
        { answer: "Sports & Fitness", score: 1 },
        { answer: "Arts & Crafts", score: 3 },
        { answer: "Tech & Gaming", score: 1 },
      ],
    },
    {
      question: "Describe your personality:",
      options: [
        { answer: "Outgoing", score: 3 },
        { answer: "Introverted", score: 1 },
        { answer: "Friendly", score: 2 },
        { answer: "Reserved", score: 0 },
      ],
    },
    {
      question: "Are you a morning person or night owl?",
      options: [
        { answer: "Morning person", score: 3 },
        { answer: "Night owl", score: 1 },
      ],
    },
    {
      question: "Do you smoke or vape?",
      options: [
        { answer: "Yes", score: 0 },
        { answer: "No", score: 3 },
      ],
    },
    {
      question: "What is your worst habit?",
      options: [
        { answer: "Procrastination", score: 1 },
        { answer: "Untidiness", score: 0 },
        { answer: "Being loud", score: 1 },
        { answer: "Always running late", score: 0 },
      ],
    },
  ];

  const handleAnswer = (question, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: selectedOption,
    }));
    setScore((prevScore) => prevScore + selectedOption.score);
  };

  const handleSubmit = () => {
    console.log("User's final score:", score);
    console.log("User's answers:", answers);
  };

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map((option, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={q.question}
                value={option.score}
                onChange={() => handleAnswer(q.question, option)}
              />
              {option.answer}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PersonalityQuiz;
