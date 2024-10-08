import React from "react";
import { Stack, TextField, ITextField } from "@fluentui/react";
import { Button, Tooltip } from "@fluentui/react-components";
import { Send28Filled } from "@fluentui/react-icons";

import styles from "./QuestionInput.module.css";

interface Props {
  initQuestion?: string;
  placeholder?: string;
  value?: string;
  setValue: (value: string) => void;
  componentRef?: React.RefObject<ITextField>;
}

export const QuestionInput = ({ placeholder, value, setValue, componentRef }: Props) => {
  // const [question, setQuestion] = useState<string>("");

  const onQuestionChange = (
    _ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (!newValue) {
      setValue("");
    } else if (newValue.length <= 1000) {
      setValue(newValue);
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
        value={value}
        componentRef={componentRef}
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
