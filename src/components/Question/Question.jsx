import styles from "./question.module.scss";

export const Question = ({ text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
