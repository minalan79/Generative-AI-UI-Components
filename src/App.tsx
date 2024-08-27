import "./App.css";
import { useState } from "react";
import { ExampleList } from "./components/Example/ExampleList";
import styles from "./App.module.css";

import { QuestionInput } from "./components/QuestionInput/QuestionInput";

import Chatbox from "./components/Chatbox";
function App() {
  interface Examples {
    questionpart: string;
    questionvar: number[];
  }

  const [promptValue, setPromptValue] = useState<string>("");

  const onExampleClicked = (example: Examples) => {
    console.log(example);
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
                <QuestionInput placeholder="Type a new question (e.g. does my plan cover annual eye exams?)" value={promptValue} />
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
