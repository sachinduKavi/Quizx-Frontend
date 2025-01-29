import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuestion } from '../redux/currentQuestion-slice';
import Footer from '../components/Footer/Footer';
import { fetchQuizzesQuery } from '../services/quizQuery';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const globalUser = useSelector((state: RootState) => state.user);
  const [quizzes, setQuizzes] = useState([{ quiz_id: 1, quiz_name: 'Quiz 01', access_link: '/quiz/1' }])


  const getQuizzes = async () => {
    const response = await fetchQuizzesQuery()
    if(response.status === 200) {
      setQuizzes(response.data)
    }
  }

  useEffect(() => {
    getQuizzes()
  })



  return (
    <>
      <Navbar />
      <div className="container py-5">
       
        <div className="mb-4 text-center" id="new_quiz">
          <button
            className="btn btn-dark fw-bold  "
            onClick={() => {
              // Open new question format
              dispatch(resetQuestion())
              navigate('/editor')
            }}
          >
            Add New
          </button>
        </div>

       
        <h4 className="mb-4 text-center">Recent Quizzes</h4>
        <div className="quiz-cards-container">
          {quizzes.map((quiz) => (
            <div key={quiz.quiz_id} className="quiz-card">
              <div className="card text-center bg-secondary text-white">
                <div className="card-body">
                  <h5 className="card-title">{quiz.quiz_name}</h5>
                  <button
                    className="btn btn-dark mt-3"
                    onClick={() => navigate(quiz.access_link)}
                  >
                    Access Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
