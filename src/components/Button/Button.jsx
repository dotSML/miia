import styles from "./button.module.scss";

export const Button = ({ label, style, handleClick }) => {
  return (
    <button className={styles.container} style={style} onClick={handleClick}>
      <div className={styles.label}>{label}</div>
    </button>
  );
};
