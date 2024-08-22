import styles from "./Example.module.css";

interface Examples {
  questionpart: string;
  questionvar: number[];
}

interface Props {
  question: Examples;
  onClick: (value: Examples) => void;
}

export const Example = ({ question, onClick }: Props) => {
  const words = question.questionpart.split(" ");

  return (
    <div className={styles.example} onClick={() => onClick(question)}>
      <p className={styles.exampleText}>
        {words.map((word, index) => (
          <span
            key={index}
            style={{
              color: question.questionvar.includes(index) ? "gray" : "black",
              fontStyle: question.questionvar.includes(index)
                ? "italic"
                : "normal",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};
