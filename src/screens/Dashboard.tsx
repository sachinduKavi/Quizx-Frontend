import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Navbar from '../components/Navbar/Navbar';
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuestion } from '../redux/currentQuestion-slice';
import Footer from '../components/Footer/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const globalUser = useSelector((state: RootState) => state.user);

  const quizzes = [
    { id: 1, title: 'Quiz 01', link: '/quiz/1' },
    { id: 2, title: 'Quiz 02', link: '/quiz/2' },
    { id: 3, title: 'Quiz 03', link: '/quiz/3' },
  ];

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
            <div key={quiz.id} className="quiz-card">
              <div className="card text-center bg-secondary text-white">
                <div className="card-body">
                  <h5 className="card-title">{quiz.title}</h5>
                  <button
                    className="btn btn-dark mt-3"
                    onClick={() => navigate(quiz.link)}
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
