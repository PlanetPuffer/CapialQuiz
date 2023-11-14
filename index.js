import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


//express framework
const app = express();
const port = 3000;


// postgres database
const db = new pg.Client({ //Update this based on your configuration
  user: "postgres", 
  host: "localhost",
  database: "world",
  password: "",
  port: 5432,
});



db.connect();

let quiz = [];
let flags = [];
let currentFlag = [];
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
});
db.query("SELECT * FROM flags", (err, res)=> {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    flags = res.rows;
  }
  db.end();
})
let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// Node - GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  // console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion, flag: currentFlag });
});

// POST answer
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log("Correct. Score: " +totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
    answerFinal: currentQuestion.capital,
    flag: currentFlag,
  });
});

async function nextQuestion() {
  let rand = Math.floor(Math.random() * quiz.length)
  const randomCountry = quiz[rand];
  currentQuestion = randomCountry;
  currentFlag = flags[rand];
  
  console.log("Current Question:", currentQuestion);
  console.log("Current Flag URL:", currentFlag);
  
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
