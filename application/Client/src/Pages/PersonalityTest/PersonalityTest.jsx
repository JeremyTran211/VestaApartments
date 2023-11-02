import React, { useState } from "react";
import { Link } from "react-router-dom";

const PersonalityQuiz = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Are you a morning person or night owl?",
      options: [
        { answer: "Morning Person", score: 1 },
        { answer: "Night Owl", score: 2 },
      ],
    },
    {
      question: "Do you smoke or vape?",
      options: [
        { answer: "Yes", score: -1 },
        { answer: "No", score: 1 },
      ],
    },
    {
      question: "What is your worst habit?",
      options: [
        { answer: "Procrastinating", score: -1 },
        { answer: "Biting nails", score: -1 },
        { answer: "Others", score: 0 },
      ],
    },
    {
      question: "What are your primary hobbies?",
      options: [
        { answer: "Reading", score: 1 },
        { answer: "Sports", score: 2 },
        { answer: "Music", score: 1 },
        { answer: "Others", score: 0 },
      ],
    },
    {
      question: "How clean do you consider yourself?",
      options: [
        { answer: "Very clean", score: 2 },
        { answer: "Average", score: 1 },
        { answer: "Not so clean", score: -1 },
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
    padding: "5px 1px",
    fontSize: "10px",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 5px #999",
  };

  const quizContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "1px solid black",
    padding: "20px",
    borderRadius: "8px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 4px #999",
  };

  return (
    <div style={containerStyle}>
      {/* Back to Home button */}
      <div style={backToHomeStyle}>
        <Link to="/"><button style={buttonStyle}>Back to Home</button></Link>
      </div>

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
        <button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalityQuiz;
