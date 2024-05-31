const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid #000",
      position: "absolute",
      right: "-30px",
      top: "50px",
    }}
  ></div>
);
const BODY = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "#000",
      position: "absolute",
      right: "0",
      top: "120px",
    }}
  ></div>
);
const ARMRIGHT = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "#000",
      position: "absolute",
      right: "-45px",
      top: "100px",
      transform: "rotate(66deg)",
    }}
  ></div>
);
const ARMLEFT = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "#000",
      position: "absolute",
      right: "45px",
      top: "100px",
      transform: "rotate(-66deg)",
    }}
  ></div>
);
const LEGRIGHT = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "#000",
      position: "absolute",
      right: "-25px",
      bottom: "120px",
      transform: "rotate(-30deg)",
    }}
  ></div>
);
const LEGLEFT = (
  <div
    style={{
      height: "100px",
      width: "10px",
      background: "#000",
      position: "absolute",
      right: "25px",
      bottom: "120px",
      transform: "rotate(30deg)",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, ARMRIGHT, ARMLEFT, LEGRIGHT, LEGLEFT];

export const HangmanDrawing = ({
  numberOfGusses,
}: {
  numberOfGusses: number;
}) => {
  return (
    <div style={{ position: "relative" }}>
     {BODY_PARTS.slice(0, numberOfGusses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "#000",
          top: 0,
          right: 0,
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "#000",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "#000",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "#000",
        }}
      ></div>
    </div>
  );
};
