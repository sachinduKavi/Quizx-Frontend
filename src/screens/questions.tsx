import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './questions.css';

// Types
interface Answer {
  id: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: string]: string[] };
}

// Sample questions 
//me page ek navbar ke about ekt link kr mt ui ek bl gn on nis ek ayn krala ubt on tent link kr gnin
const questions: Question[] = [
  {
    id: '1',
    text: 'What are you?',
    answers: [
      { id: 'a1', text: 'Badulla' },
      { id: 'a2', text: 'Matara' },
      { id: 'a3', text: 'Galle' },
      { id: 'a4', text: 'Hambanthita' },
    ],
  },
  {
    id: '2',
    text: 'Who is best batman?',
    answers: [
      { id: 'b1', text: 'sanga' },
      { id: 'b2', text: 'mahela' },
      { id: 'b3', text: 'dilshan' },
      { id: 'b4', text: 'pathum' },
    ],
  },
];

export default function Question() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
  });

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const selectedAnswers = quizState.selectedAnswers[currentQuestion.id] || [];

  const handleAnswerSelect = (answerId: string) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [currentQuestion.id]: selectedAnswers.includes(answerId)
          ? selectedAnswers.filter((id) => id !== answerId)
          : [...selectedAnswers, answerId],
      },
    }));
  };

  const handleNavigate = (index: number) => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: index,
    }));
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      handleNavigate(quizState.currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      handleNavigate(quizState.currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container">
      <div className="quiz-wrapper">
        <div className="quiz-content">
          {/* Question Navigation */}
          <div className="question-navigation">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(index)}
                className={`nav-button ${
                  quizState.currentQuestionIndex === index ? 'active' : ''
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Question and Answers */}
          <div className="question-section">
            <h2 className="question-text">{currentQuestion.text}</h2>
            <div className="answers-section">
              {currentQuestion.answers.map((answer) => {
                const isSelected = selectedAnswers.includes(answer.id);

                return (
                  <label
                    key={answer.id}
                    className={`answer-label ${isSelected ? 'selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleAnswerSelect(answer.id)}
                      className="answer-checkbox"
                    />
                    <span className="answer-text">{answer.text}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={quizState.currentQuestionIndex === 0}
              className="nav-button previous"
            >
              <ArrowLeft className="icon" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={quizState.currentQuestionIndex === questions.length - 1}
              className="nav-button next"
            >
              Next
              <ArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
