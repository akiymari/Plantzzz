import PropTypes from 'prop-types';

function Info({ handleInfoClick, handleOutsideClick }) {
    return (
        <div id="info" onClick={handleOutsideClick}>
            <div id="content-with-border">
                <a onClick={handleInfoClick}>X</a>
                <h1>Info</h1>
                <ol>
                    <li>Learn about 50 different plants, each with 4 unique questions.</li>
                    <li>You'll have a quiz of totaling 100 questions.</li>
                    <li>Practice quizzes will randomly select 25 plants from the set.</li>
                    <li>Each question is worth 1 point.</li>
                    <li>A scoreboard will show at end to track your progress.</li>
                    <li>Each quiz lasts for 10 minutes.</li>
                    <li>Refreshing the page will end the quiz.</li>
                    <li>You can retake the same quiz as many times as you like.</li>
                    <li>Your latest score will always be displayed.</li>
                    <li>Your correct answers will be counted when the time is up.</li>
                </ol>
            </div>
        </div>
    );
}

Info.propTypes = {
    handleInfoClick: PropTypes.func,
    handleOutsideClick: PropTypes.func
};

export default Info;
