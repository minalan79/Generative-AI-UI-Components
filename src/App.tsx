import "./App.css";
import { useState, useRef } from "react";
import { ExampleList } from "./components/Example/ExampleList";
import styles from "./App.module.css";
import { ITextField } from "@fluentui/react";

import { QuestionInput } from "./components/QuestionInput/QuestionInput";

import Chatbox from "./components/Chatbox";
function App() {
  interface Examples {
    questionpart: string;
    questionvar: number[];
  }

  const [promptValue, setPromptValue] = useState<string>("");
  const questionInputRef = useRef<ITextField>(null);

  const onExampleClicked = (example: Examples) => {
    setPromptValue(example.questionpart);
    setTimeout(() => {
      if (questionInputRef.current) {
        questionInputRef.current.focus();
        questionInputRef.current.setSelectionRange(example.questionpart.length, example.questionpart.length);
      }
    }, 0);

  };

  const useGPT4V = true;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.chatEmptyState}>
          <div className={styles.chatRoot}>
            <div className={styles.chatContainer}>
              <ExampleList
                onExampleClicked={onExampleClicked}
                useGPT4V={useGPT4V}
              />
              <div className={styles.chatInput}>
                <QuestionInput placeholder="Type a new question (e.g. does my plan cover annual eye exams?)" value={promptValue} setValue={setPromptValue} componentRef={questionInputRef}/>
              </div>
              <Chatbox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
