import { useState } from "react";
import { Stack, TextField } from "@fluentui/react";
import { Button, Tooltip } from "@fluentui/react-components";
import { Send28Filled } from "@fluentui/react-icons";

import styles from "./QuestionInput.module.css";

interface Props {
  initQuestion?: string;
  placeholder?: string;
}

export const QuestionInput = ({ placeholder }: Props) => {
  const [question, setQuestion] = useState<string>("");

  const onQuestionChange = (
    _ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (!newValue) {
      setQuestion("");
    } else if (newValue.length <= 1000) {
      setQuestion(newValue);
    }
  };

  return (
    <Stack horizontal className={styles.questionInputContainer}>
      <TextField
        className={styles.questionInputTextArea}
        placeholder={placeholder}
        multiline
        resizable={false}
        borderless
        value={question}
        onChange={onQuestionChange}
      />
      <div className={styles.questionInputButtonsContainer}>
        <Tooltip content="Submit question" relationship="label">
          <Button
            size="large"
            icon={<Send28Filled primaryFill="rgba(115, 118, 225, 1)" />}
          />
        </Tooltip>
      </div>
    </Stack>
  );
};
