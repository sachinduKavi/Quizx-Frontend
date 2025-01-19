
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./About.css"


function About() {


  return (
    <>
    <Navbar/>
    <div className="container py-5 " >
      <div className="row">
        <div className="col-md-8 mx-auto text-center" id="about_content">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="mt-4">
            <strong>Welcome to QuizX – where learning meets fun!</strong>
          </p>
          <p className="mt-3">
            At QuizX, we believe that quizzes are more than just questions and answers; they’re a
            powerful way to challenge yourself, test your knowledge, and grow your skills.
          </p>
          <p className="mt-3">
            Our platform is designed to provide an engaging, interactive, and user-friendly
            experience for learners and quiz enthusiasts of all levels. Whether you’re here to
            sharpen your intellect, compete with friends, or simply enjoy the thrill of discovery,
            we’ve got something for everyone.
          </p>
          <p className="mt-3">
            From a variety of topics to customizable quiz options, we aim to make every visit
            exciting and rewarding.
          </p>
          <p className="mt-4">
            <strong>
              Join us on this journey to turn curiosity into achievement. Let’s play, learn, and
              grow together!
            </strong>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default About