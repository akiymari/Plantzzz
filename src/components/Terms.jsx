import PropTypes from 'prop-types';

function Terms({ handleTermsSubmit, handleOutsideClick }) {
    return (
        <div id="terms" onClick={handleOutsideClick}>
            <div id="content">
                <a className="close" onClick={handleTermsSubmit}>X</a>
                <h2>Plantzzz Web App</h2>
                <>
                    <h3>Introduction</h3>
                    <p>
                        Welcome to Plantzzz Web App, an interactive Quiz tool designed to test your knowledge of plants. 
                        This application provides an engaging experience where you can practice and test your understanding of 
                        various plant topics using multiple-choice questions and user-friendly navigation.
                    </p>

                    <h4>Features</h4>
                    <ol>
                        <li>
                            <strong>Login:</strong> Start quizzes by entering your name.
                        </li>
                        <li>
                            <strong>Multi-Users System:</strong> Can add multiple users to track individual progress separately.
                        </li>
                        <li>
                            <strong>Topic Selection:</strong> Choose from different plant learning topics to begin your quiz, practice quiz is also available.
                        </li>
                        <li>
                            <strong>Quiz Interface:</strong> Navigate through questions with next buttons.
                        </li>
                        <li>
                            <strong>Answer Selection:</strong> Select correct answer (Only one) from multiple-choice options.
                        </li>
                        <li>
                            <strong>Timer:</strong> Each quiz has a 10-minute timer. Only correct answers among attempted questions 
                            are considered when time runs out.
                        </li>
                        <li>
                            <strong>Quiz Completion:</strong> View results after completing the quiz.
                        </li>
                        <li>
                            <strong>Retake Quiz:</strong> Please repeat quizzes to improve your knowledge if you fail to pass.
                        </li>
                        <li>
                            <strong>Quiz Tracking:</strong> Please finish quizzes and follow Timer rules otherwise system will let us know :P.
                        </li>
                    </ol>

                    <h4>Support</h4>
                    <p>For any inquiries or support requests, please contact us via email at <a rel="noreferrer" href="mailto:your-email@example.com" target="_blank">marie.akiyama@lincolnuni.ac.nz</a>.</p>

                    <h4>Note</h4>
                    <p>This web application is designed for educational purposes. Explore and learn about plants in a fun and interactive way!</p>
                    <h5>Happy learning!</h5>
                </>
            </div>
        </div>
    );
}

Terms.propTypes = {
    handleTermsSubmit: PropTypes.func,
    handleOutsideClick: PropTypes.func
};

export default Terms;
