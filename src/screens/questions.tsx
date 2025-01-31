import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import './questions.css';
import { Input } from 'antd';
import toast from 'react-hot-toast';
import { getQuizQuery, submitQuestionQuery } from '../services/quizQuery';

// Types
interface Answer {
  ans_id: number;
  answer: string;
  state: boolean;
}

interface Question {
  question_id: number;
  title: string;
  description: string;
  type: string;
  multiple: boolean;
  required: boolean;
  answers: Answer[];
}

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: string]: string[] }; // Storing answer values (answer.answer)
}

export default function Question() {
  const { quizID } = useParams();

  const [quiz, setQuiz] = useState<any>(null);
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [username, setUsername] = useState<string>('')

  const fetchQuiz = async () => {
    console.log(quizID);
    const response = await getQuizQuery(parseInt(quizID ?? '0'));
    if (response.status === 200) {
      console.log(response.data);
      setQuiz(response.data);
    }
  };

  useEffect(() => {
    if (quiz?.questions) {
      setQuestionList(quiz.questions);
    }
  }, [quiz]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
  });

  const currentQuestion = questionList[quizState.currentQuestionIndex];
  const selectedAnswers = quizState.selectedAnswers[currentQuestion?.question_id] || [];

  const handleAnswerSelect = (answerValue: string) => {
    setQuizState((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [currentQuestion.question_id]: selectedAnswers.includes(answerValue)
          ? selectedAnswers.filter((value) => value !== answerValue)
          : [...selectedAnswers, answerValue],
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
    if (quizState.currentQuestionIndex < questionList.length - 1) {
      handleNavigate(quizState.currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    if(!window.confirm("Confirm to submission ?")) return;

    const result = questionList.map((question) => ({
      question_id: question.question_id,
      selected_answers: quizState.selectedAnswers[question.question_id] || [],
    }));


    const request_data = {
      username: username,
      quizID: quizID,
      selected_values: result
    }
    
    // console.log(JSON.stringify(request_data));
    const response = await submitQuestionQuery(request_data)
    console.log(response)
    if(response.status === 201) {
      // Submission success
      toast.success('You have successfully submitted')
    } else {
      // Submission failed
      toast.error('Something went wrong, Please try again.')
    }
  };

  return (
    <div className="container">
      <div className="quiz-wrapper">
        <div className='mb-14' style={{ margin: '10px' }}>
          <Input placeholder='Enter your name' styles={{input: {fontSize: '25px', color: '#C7C5C5'}}} value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
        </div>

        <div className="quiz-content">
          {/* Question Navigation */}
          <div className="question-navigation">
            {questionList.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(index)}
                className={`nav-button ${quizState.currentQuestionIndex === index ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Question and Answers */}
          <div className="question-section">
            <h1>{quiz?.quiz_name}</h1>
            <h2 className="question-text">{currentQuestion?.title}</h2>
            <p style={{margin: '10px'}} className='text-gray-400'>{currentQuestion?.description}</p>
            <div className="answers-section">
              {currentQuestion?.answers.map((answer) => {
                const isSelected = selectedAnswers.includes(answer.answer);

                return (
                  <label
                    key={answer.ans_id}
                    className={`answer-label ${isSelected ? 'selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleAnswerSelect(answer.answer)} // Storing the answer text
                      className="answer-checkbox"
                    />
                    <span className="answer-text">{answer.answer}</span>
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
              disabled={quizState.currentQuestionIndex === questionList.length - 1}
              className="nav-button next"
            >
              Next
              <ArrowRight className="icon" />
            </button>
          </div>

          {/* Submit Button */}
          {quizState.currentQuestionIndex === questionList.length - 1 && (
            <div className="submit-section">
              <button onClick={handleSubmit} className="submit-button text-white">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
