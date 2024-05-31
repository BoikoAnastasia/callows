export const HangmanWord = () => {
    const word = "test"
    const guessedLetter = ["t", "e", "s"]
    return (<div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {word.split("").map((letter, index) => (
            <span key={index} style={{
                borderBottom: ".1em solid #000"
            }}>
                <span style={{
                    visibility: guessedLetter.includes(letter) ? "visible" : "hidden"
                }}> {letter}</span>
            </span>
        ))}
    </div>)
}

