export const HangmanDrawing = () => {
    return (
        <div style={{ position: "relative" }}>
            <div style={{ 
                 height: "50px",
                 width: "10px",
                 background: "#000",
                 top: 0,
                 right:0,
                 position: "absolute"
             }}></div>
            <div style={{
                height: "10px",
                width: "200px",
                background: "#000",
                marginLeft: "120px"
            }}></div>
            <div style={{
                height: "400px",
                width: "10px",
                background: "#000",
                marginLeft: "120px"
            }}></div>
            <div style={{
                height: "10px",
                width: "250px",
                background: "#000"
            }}></div>
        </div>
    )
}