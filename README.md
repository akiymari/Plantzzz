# PlantAppzzz_Marie
 Industry Project

# Plantzzz Web App

## Overview
The Plantzzz Web App is an interactive learning platform designed to enhance botanical knowledge through quizzes and dynamic feedback. This project aims to improve user engagement, facilitate easy content management.

## Objectives
- Enhance students engagement through interactive quizzes and dynamic feedback.
- Ensure cross-platform compatibility for wider accessibility.
- Provide a user-friendly interface for easy navigation and interaction.
- Offer personalized experiences by tracking individual user progress.

## Features
- **User Authentication:** Start quizzes by entering a name.
- **Multi-User System:** Track progress separately for multiple users.
- **Topic Selection:** Choose from different plant course topics (4 topics) to start quizzes.
- **Quiz Interface:** Navigate through questions with "Next" and "Previous" buttons.
- **Answer Selection:** Select correct answers from multiple-choice options.
- **Timer:** Each quiz has a 10-minute timer.
- **Quiz Completion:** View results after completing the quiz.
- **Retake Quiz:** Repeat quizzes to improve knowledge.
- **Dynamic Feedback:** Receive immediate feedback on quiz performance.

## Technologies Used
- **Frontend:** React.js, JavaScript
- **Backend:** Node.js
- **Data Storage:** JSON files

## Project Structure
- `public/` : Contains the HTML template and static assets
- `src/` : Contains the source code
  - `components/` : Contains the React components
    - `Content.jsx` : Handles the main content structure
    - `Flashcard.jsx` : Manages the quiz flashcards
    - `Info.jsx` : Displays information about the app
    - `Login.jsx` : Manages user login functionality
    - `Terms.jsx` : Shows terms and conditions
    - `Topic.jsx` : Manages topic selection and displays user progress
  - `data/` : Contains the quiz data files
    - `questions.js` : Contains quiz questions
    - `topics.js` : Contains quiz topics
  - `App.jsx` : Main app component
  - `AppFunctions.js` : Contains utility functions
  - `App.css` : Contains styling for the app
- `package.json` : Lists dependencies and scripts

## Usage
1. **Login:**
   - Enter your name to start the quiz.
   - If you are a returning user, select your name from the list.
2. **Select a Topic:**
   - Choose a plant topic from the list to start the quiz.
3. **Take the Quiz:**
   - Answer multiple-choice questions.
   - Navigate using "Next" and "Previous" buttons.
4. **View Results:**
   - After completing the quiz, view your score and feedback.
   - Option to retake the quiz or select a new topic.

## Contact
For any inquiries or support, please contact:
- Email: marie.akiyama@lincolnuni.ac.nz
