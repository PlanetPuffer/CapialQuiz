# Capital City Quiz

Capital City Quiz is an interactive web application designed to test and enhance users' knowledge of world capitals. It features a simple and user-friendly interface where users answer questions about the capitals of different countries. This project is built using Node.js, Express, PostgreSQL, and EJS for templating.

## Features
- **Database Integration:** Uses PostgreSQL to store and retrieve questions and country flags.
- **Dynamic Question Generation:** Randomly selects a country and asks the user to identify its capital city.
- **Score Tracking:** Keeps track of the user's total correct answers.
- **Immediate Feedback:** Provides instant feedback on whether the provided answer is correct or incorrect.
- **End Game Alert:** Alerts the user when they answer incorrectly, displaying the correct answer and their final score, with an option to restart the quiz.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone URL
   cd WORKING_DIRECTORY
   ```

2. **Install dependencies:**

   ```bash
   npm i
   ```

3. **Set up the PostgreSQL database:**

   - Ensure PostgreSQL is installed and running on your system.
   - Create a new database named `world`.
   - Import the provided csv files (capitals.csv and flags.csv) to set up the necessary tables and data.

4. **Configure the database connection:**

   Update the database connection configuration in the application code with your PostgreSQL user, password, and other relevant details.

5. **Start the server:**

   ```bash
   node index.js
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

Navigate to `http://localhost:3000` in your browser to start the quiz. Enter your guess for the capital of the displayed country and submit your answer. The quiz will provide immediate feedback and update your score accordingly.