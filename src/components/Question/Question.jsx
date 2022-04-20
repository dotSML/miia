import styles from "./question.module.scss";

export const Question = ({ question }) => {
  const sequence = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
  return (
    <div className={styles.container}>
      <p className={styles.text}>{question.text}</p>
      {question.options && (
        <ul className={styles.optionsList}>
          {question.options.map((option, i) => {
            return (
              <li className={styles.option}>
                <div>{sequence[i]}.</div>
                <div className={styles.optionText}>{option.text}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
