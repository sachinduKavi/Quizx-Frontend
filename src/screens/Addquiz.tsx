import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Addquiz.css";

interface Question {
  question: string;
  answers: string[];
  correctAnswer: number; 
}

function Addquiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [formData, setFormData] = useState<Question>({
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: -1, 
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    if (index !== undefined) {
      const newAnswers = [...formData.answers];
      newAnswers[index] = e.target.value;
      setFormData({ ...formData, answers: newAnswers });
    } else {
      setFormData({ ...formData, question: e.target.value });
    }
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, correctAnswer: Number(e.target.value) });
  };

  const handleClear = () => {
    setFormData({
      question: "",
      answers: ["", "", "", ""],
      correctAnswer: -1,
    });
  };

  const handleSubmit = () => {
    if (
      formData.question &&
      formData.answers.every((ans) => ans.trim()) &&
      formData.correctAnswer !== -1
    ) {
      setQuestions([...questions, { ...formData }]);
      handleClear();
    }
  };

  return (
    <>
      <Navbar />
      <div className="addquiz-container">
        <div className="form-section">
          <h3>Add New Question</h3>
          <div className="form-group">
            <textarea
              className="question-input"
              placeholder="Enter your question here..."
              value={formData.question}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {formData.answers.map((answer, index) => (
            <div key={index} className="form-group">
              <input
                type="text"
                className={`answer-input answer-input-${index}`}
                placeholder={`Answer ${index + 1}`}
                value={answer}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          ))}
          <div className="form-group">
            <label>Select the correct answer:</label>
            <select
              value={formData.correctAnswer}
              onChange={handleDropdownChange}
              className="correct-answer-dropdown"
            >
              <option value="-1">Select...</option>
              {formData.answers.map((_, index) => (
                <option key={index} value={index}>
                  Answer {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button className="btn btn-clear" onClick={handleClear}>
              Clear
            </button>
            <button className="btn btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="questions-section">
          <h3>Questions</h3>

          {/* database ek neti nis mehem demme mek ayn krnn */}
          
          {/* {questions.length > 0 ? (
            questions.map((item, idx) => (
              <div key={idx} className="question-card">
                <p className="question-text">
                  {idx + 1}. {item.question}
                </p>
                <ul className="answers-list">
                  {item.answers.map((ans, ansIdx) => (
                    <li key={ansIdx} className="answer-item">
                      {String.fromCharCode(65 + ansIdx)}. {ans}
                    </li>
                  ))}
                </ul>
                <p className="correct-answer">
                  Correct Answer:{" "}
                  {String.fromCharCode(65 + item.correctAnswer)} 
                  
                </p>
              </div>
            ))
          ) : (
            <p className="no-questions">No questions added yet.</p>
          )} */}
          <button className="btn publish-btn">Publish quiz</button>
        </div>
      </div>
    </>
  );
}

export default Addquiz;
