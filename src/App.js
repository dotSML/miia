import styles from "./style.module.scss";
import "./App.css";
import { Question } from "./components/Question/Question";
import { Button } from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);

  // Küsimused
  const questions = [
    {
      text: "Mis su nimi on?",
    },
    {
      text: "Mis su kassi nimi on?",
    },
  ];

  // Funktsioon, mis annab järgmise küsimuse järjekorranumbri (index)
  const getNextQuestion = (
    currentQuestion,
    handleSetQuestion,
    amountOfQuestions
  ) => {
    // Kui praegune küsimus ei ole viimane, siis võime järgmise küsimuse peale minna
    if (currentQuestion !== amountOfQuestions - 1) {
      handleSetQuestion(currentQuestion + 1);
    }
  };

  // Funktsioon, mis annab eelmise küsimuse järjekorranumbri (index)
  const getPreviousQuestion = (currentQuestion, handleSetQuestion) => {
    // Kui praegune küsimus ei ole esimene, siis võime eelmise küsimuse peale minna
    if (currentQuestion !== 0) {
      handleSetQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Question text={questions[question].text} />
      <p className={styles.count}>
        {question + 1} / {questions.length}
      </p>
      <div className={styles.buttons}>
        <Button
          label="Tagasi"
          style={{ backgroundColor: "#ff2e5b" }}
          handleClick={() => getPreviousQuestion(question, setQuestion)}
        />
        <Button
          label="Edasi"
          style={{ backgroundColor: "#21b557" }}
          handleClick={() =>
            getNextQuestion(question, setQuestion, questions.length)
          }
        />
      </div>
    </div>
  );
}

export default App;
