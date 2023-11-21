import React, { useState } from "react";

const PersonalityQuiz = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "What time do you go to bed on weeknights?",
      options: [
        { answer: "10 PM or earlier", score: 1 },
        { answer: "Between 10 PM and Midnight", score: 2 },
        { answer: "Around Midnight", score: 3 },
        { answer: "2 AM or later", score: 4 },
      ],
    },
    {
      question: "Where do you typically do homework?",
      options: [
        { answer: "At my desk", score: 1 },
        { answer: "In the library", score: 2 },
        { answer: "In a study lounge or similar space", score: 3 },
        { answer: "I don’t really do homework.", score: 4 },
      ],
    },
    {
      question: "Do you smoke weed?",
      options: [
        { answer: "Yes", score: -1 },
        { answer: "No", score: 1 },
        { answer: "Sometimes", score: 0 },
      ],
    },
    {
      question: "Do you smoke weed cigarettes?",
      options: [
        { answer: "Yes", score: 1 },
        { answer: "No", score: 2 },
        { answer: "Sometimes", score: 1 },
    
      ],
    },
    {
      question: "Do you drink alcohol?",
      options: [
        { answer: "Yes", score: 2 },
        { answer: "No", score: 1 },
        { answer: "Sometimes", score: -1 },
      ],
    },
    {
      question: "How would you describe your personality?",
      options: [
        { answer: "Introvert", score: 1 },
        { answer: "Extrovert", score: 2 },
        { answer: "Ambivert", score: 1.5 },
      ],
    },
  ];

  const handleAnswer = (question, selectedOption) => {
    setAnswers((prevState) => ({
      ...prevState,
      [question]: selectedOption.score,
    }));
  };

  const compatibilityMessage = (score) => {
    if (score >= 9) return "Highly Compatible";
    if (score >= 6) return "Compatible";
    if (score >= 3) return "Neutral";
    return "Not Compatible";
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all the questions.");
      return;
    }

    let totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    alert(
      `Your score is: ${totalScore}. Compatibility: ${compatibilityMessage(
        totalScore
      )}`
    );
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const backToHomeStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
  };

  const quizContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "1px solid black",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      

      {/* Quiz */}
      <div style={quizContainerStyle}>
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
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalityQuiz;
