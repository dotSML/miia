import styles from "./style.module.scss";
import "./App.css";
import { Question } from "./components/Question/Question";
import { Button } from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const [questions] = useState(
    shuffle([
      {
        text: "Nothing worse than...",
        options: [
          { text: "Lack of food" },
          { text: "Siblings" },
          { text: "Being tired" },
          { text: "Parents" },
        ],
      },
      {
        text: "What's the biggest lie you have told your parents?",
      },
      {
        text: "What evil prank have you pulled off?",
      },
      {
        text: "What is better in your life than your friends?",
      },
      {
        text: "What is the most annoying personality trait of your best friend?",
      },
      {
        text: "Do you think your friends brother/sister is attractive?",
      },
      {
        text: "Whose sister/brother you dont want to be?",
      },
      {
        text: "Whats the weirdest thing your best friend has ever done?",
      },
      {
        text: "Whats a good pickup line?",
      },
      {
        text: "Have you ever been cheated on? Have you ever cheated?",
      },
      {
        text: "Your resent crush? Latest kiss, where and when?",
      },
      {
        text: "Have your parents ever embarrass you?",
      },
      {
        text: "Are you pretty or ugly? How do you know? Are you really sure?",
      },
      {
        text: "Who has the most kissable lips in this room?",
      },
      {
        text: "If you could win any award, what would it be?",
        options: [
          { text: "Laziest person ever" },
          { text: "Biggest loser" },
          { text: "Moodiest bitch" },
          { text: "Biggest hoe" },
          { text: "Drama Queen" },
          { text: "The queen of overthinking" },
        ],
      },
      {
        text: "I was today years old when I discovered this … ?",
      },
      {
        text: "Your best poor decision ever?",
      },
      {
        text: "Are you dumb? Sure? Does everybody else agree?",
      },
      {
        text: "Why are girls so good at stalking?",
      },
      {
        text: "Every household has that one person who stresses the whole family out. Whos that person?",
      },
      {
        text: "Whose attention you NEED right now?",
      },
      {
        text: "Are you normal or is there actually something wrong with you?",
      },
      {
        text: "Whats your bad habits?",
      },
      {
        text: "Would you delete all social medias for a relationship?",
      },
      {
        text: "Do all of you think Im a snowflake?",
      },
      {
        text: "What lies you tell yourself?",
      },
      {
        text: "Why do guys get so mad when you call them cute?",
      },
      {
        text: "Have you ever just cried because youre you?",
      },
      {
        text: "Would you date a friends ex? WHY?",
      },
      {
        text: "Whats a relationship red flag to you?",
      },
      {
        text: "How would you describe your relationship with yourself in one word?",
      },
      {
        text: "What are the most painful words someone has ever said to you?",
      },
      {
        text: "How do you react when someone hits on you?",
      },
      {
        text: "Whats a good age for the first time?",
      },
      {
        text: "Have you ever tried any prohibited substances?",
      },
      {
        text: "Do you have any addictions?",
      },
      {
        text: "Have you ever had any problems with the police?",
      },
      {
        text: "Are you virgin",
      },
      {
        text: "Whats the first thing you notice in the opposite sex?",
      },
      {
        text: "Have you ever been caught drinking alcohol? How did your parents react?",
      },
      {
        text: "How many partners have you had? Not imaginary… imaginary partners dont count.",
      },
      {
        text: "Have you ever burned down something BIG? Like a house or similar.",
      },
      {
        text: "Whats the dumbest thing that your friends do?",
      },
      {
        text: "Whats the reason or reasons you have been dumped?",
      },
      {
        text: "What do you envy about your best friend?",
      },
      {
        text: "Whats the grossest thing that girls talk about or do? Like really gross.",
      },
      {
        text: "Have you ever stolen anything? What?",
      },
      {
        text: "Whats the funniest thing that you have done in the school bathroom?",
      },
      {
        text: "Which friend car you wouldnt sit in?",
      },
      {
        text: "How much do you stalk people?",
      },
      {
        text: "Have you seen all your friends naked? Who is hottest? Whose body was weird?",
      },
      {
        text: "Have you ever seen or heard your parents having sex?",
      },
      {
        text: "What stupid things your best friend has said that youll never let him or she forget?",
      },
      {
        text: "How long should a guy last?",
      },
      {
        text: "Who of your friends is the biggest hoe?",
      },
      {
        text: "Have you ever been insulted by a kid? It hurts your feelings, doesnt it?",
      },
      {
        text: "What instantly makes a girl hot?",
      },
      {
        text: "What destroys a friendship?",
      },
      {
        text: "What is the craziest rumor youve ever heard about yourself?",
      },
      {
        text: "What sucks about being your age?",
      },
      {
        text: "What do you suck at?",
      },
      {
        text: "Tell me the last thing you stuck your finger in?",
      },
      {
        text: "Who is your dumbest friend and why?",
      },
      {
        text: "What body part are you most proud of?",
      },
      {
        text: "Who pays on a date?",
      },
      {
        text: "Introduce yourself as what almost killed you. (Example: Hi, Im swimming pool/ cheese sandwich.)",
      },
      {
        text: "What is something that you like to do when nobody is around?",
      },
      {
        text: "Name as many different names you know for (dick) (eggplant emoji)",
      },
      {
        text: "Whats your favorite childhood memory thats actually fucked up?",
      },
      {
        text: "What is the first reaction when you see yourself in the mirror?",
      },
      {
        text: "I get horny...",
        options: [
          { text: "When I see your mom" },
          { text: "When I sleep" },
          { text: "When I'm in the classroom" },
          { text: "When I see someone cry" },
        ],
      },
      {
        text: "Why are you single?",
        options: [
          { text: "I can't date food" },
          { text: "I can't date myself... or can I?" },
          { text: "I can’t date the internet" },
        ],
      },
    ])
  );

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

  const endGame = () => {
    setIsGameStarted(false);
    setQuestion(0);
  };

  if (!isGameStarted) {
    return (
      <div className={styles.gameStart}>
        <img
          className={styles.gameStartLogo}
          alt="logo-dark"
          src={process.env.PUBLIC_URL + "/logo-dark.png"}
        />
        <div
          className={styles.gameStartBtn}
          onClick={() => setIsGameStarted(true)}
        >
          Start
        </div>
      </div>
    );
  }

  if (isGameStarted && questions) {
    return (
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt="logo"
          onClick={() => endGame()}
          src={process.env.PUBLIC_URL + "/logo-dark.png"}
        />
        <Question question={questions[question]} />
        <p className={styles.count}>
          {question + 1} / {questions.length}
        </p>
        <div className={styles.buttons}>
          <Button
            label="Previous"
            style={{ backgroundColor: "#ff2e5b" }}
            handleClick={() => getPreviousQuestion(question, setQuestion)}
          />
          <Button
            label={question + 1 !== questions.length ? "Next" : "Finish"}
            style={{ backgroundColor: "#21b557" }}
            handleClick={() => {
              question + 1 !== questions.length
                ? getNextQuestion(question, setQuestion, questions.length)
                : endGame();
            }}
          />
        </div>
      </div>
    );
  }

  if (isGameStarted && !questions) {
    return <div>Loading...</div>;
  }
}

export default App;
