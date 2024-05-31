interface IHangmanWord {
  guessedLetter: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export const HangmanWord = ({
  reveal = false,
  guessedLetter,
  wordToGuess,
}: IHangmanWord) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid #000",
          }}
        >
          <span
            style={{
              visibility: guessedLetter.includes(letter) || reveal ?
              "visible" : "hidden",
              color: !guessedLetter.includes(letter) && reveal ? "red" : "black"
            }}
          >
            {" "}
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
