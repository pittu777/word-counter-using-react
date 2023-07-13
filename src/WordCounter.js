import React from "react";

function Word() {
  const [result, setResult] = React.useState({
    words: "",
    count: 0,
  });

  function wordCounter() {
    const wordsArr = result.words.trim().split(/\s+/);
    const wordCount = wordsArr.length;
    setResult((prev) => ({
      ...prev,
      count: wordCount,
    }));
    console.log(wordCount);
  }

  function onChange(event) {
    const { name, value } = event.target;
    setResult((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <textarea
          name="words"
          onChange={onChange}
          value={result.words}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px",
            marginBottom: "10px",
            resize: "vertical",
            width: "100%",
            boxSizing: "border-box",
          }}
        ></textarea>
        <p style={{ marginBottom: "10px" }}>Word count: {result.count}</p>
        <button
          onClick={wordCounter}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "10px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Count
        </button>
      </div>
    </div>
  );
}

export default Word;
