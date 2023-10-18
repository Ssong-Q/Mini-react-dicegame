import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import Logo from "./Logo";
import "./App.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <Logo className="App-logo" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button
            className="App-button"
            onClick={handleRollClick}
            color={"blue"}
          >
            던지기
          </Button>
          <Button
            className="App-button"
            onClick={handleClearClick}
            color={"red"}
          >
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          className="App-board"
          name="나"
          color="blue"
          gameHistory={myHistory}
        ></Board>
        <Board
          className="App-board"
          name="상대"
          color="red"
          gameHistory={otherHistory}
        ></Board>
      </div>
    </div>
  );
}

export default App;
