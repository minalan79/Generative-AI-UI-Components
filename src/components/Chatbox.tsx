import { useState } from "react";

const predefinedWords = ["React", "JavaScript", "CSS", "HTML", "Redux"];

const Chatbox = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestedWord, setSuggestedWord] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleButtonClick = () => {
    const text = "Tell me about ";
    setInputValue(text);
    setCursorPosition(text.length + 1); // Position cursor before the blank space
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    const lastWord = value.split(" ").pop();

    if (lastWord === "") {
      setSuggestedWord("");
      return;
    }

    const suggestion = predefinedWords.find((word) =>
      word.toLowerCase().startsWith(lastWord.toLowerCase())
    );

    setSuggestedWord(suggestion ? suggestion : "");
  };

  const handleKeyDown = (e: any) => {
    if (suggestedWord && e.key === "Tab") {
      e.preventDefault();
      const words = inputValue.split(" ");
      words.pop();
      setInputValue(words.join(" ") + " " + suggestedWord + " ");
      setSuggestedWord("");
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Example Question</button>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "300px" }}
        />
        {suggestedWord && (
          <span
            style={{
              position: "absolute",
              left: `${cursorPosition}ch`,
              color: "grey",
            }}
          >
            {suggestedWord}
          </span>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
