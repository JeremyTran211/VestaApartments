import React, { useState } from "react";

const PersonalityQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

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
      question: "How often do you have friends over?",
      options: [
        { answer: "Often", score: -1 },
        { answer: "Sometimes", score: 1 },
        { answer: "Rarely", score: 2 },
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
    {
      question: "Do you have any pets?",
      options: [
        { answer: "Yes", score: 1 },
        { answer: "No", score: 0 },
      ],
    },
    {
      question: "How were your previous roommate experiences?",
      options: [
        { answer: "Positive", score: 2 },
        { answer: "Neutral", score: 1 },
        { answer: "Negative", score: -1 },
        { answer: "Never had a roommate", score: 0 },
      ],
    },
    {
      question: "How long do you plan to stay?",
      options: [
        { answer: "Less than 6 months", score: -1 },
        { answer: "6 months to a year", score: 1 },
        { answer: "More than a year", score: 2 },
      ],
    },
  ];

  const questionsPerPage = 5;
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleAnswer = (question, selectedOption) => {
    setAnswers((prevState) => ({
      ...prevState,
      [question]: selectedOption.score,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all the questions.");
      return;
    }
    setShowPreview(true);
  };

  const handleFinalSubmit = () => {
    let totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    alert(
      `Your score is: ${totalScore}. Compatibility: ${compatibilityMessage(
        totalScore
      )}`
    );
  };

  const compatibilityMessage = (score) => {
    if (score >= 9) return "Highly Compatible";
    if (score >= 6) return "Compatible";
    if (score >= 3) return "Neutral";
    return "Not Compatible";
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const findAnswerText = (question, score) => {
    const questionObj = questions.find((q) => q.question === question);
    const optionObj = questionObj.options.find(
      (option) => option.score === score
    );
    return optionObj ? optionObj.answer : "Not answered";
  };

  const questionContainerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    margin: "5px 0",
    textAlign: "left",
  };

  const quizContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // border: "1px solid black",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: "20px",
  };

  if (showPreview) {
    return (
      <div style={containerStyle}>
        <div style={quizContainerStyle}>
          {questions.map((q, index) => (
            <div key={index} style={questionContainerStyle}>
              <p>{q.question}</p>
              <p>{findAnswerText(q.question, answers[q.question])}</p>
            </div>
          ))}
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleFinalSubmit}
          >
            Confirm and Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={quizContainerStyle}>
        {currentQuestions.map((q, index) => (
          <div key={index} style={questionContainerStyle}>
            <p>{q.question}</p>
            {q.options.map((option, optIndex) => (
              <label key={optIndex}>
                <input
                  type="radio"
                  name={q.question}
                  value={option.score}
                  checked={answers[q.question] === option.score}
                  onChange={() => handleAnswer(q.question, option)}
                />
                {option.answer}
              </label>
            ))}
          </div>
        ))}
        {currentPage > 1 && (
          <button
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {currentPage * questionsPerPage < questions.length && (
          <button
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {currentPage * questionsPerPage >= questions.length && (
          <button
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              marginTop: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalityQuiz;
