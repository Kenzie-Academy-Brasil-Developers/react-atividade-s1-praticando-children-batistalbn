import "./App.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 3 mangás mais vendidos de todos os tempos</h1>
        <CenteredCard anime={"onePiece"}>
          <h3>1° One Piece - 490 milhões</h3>
          <p>
            <span>Autor:</span> Elichiro Oda
          </p>
        </CenteredCard>
        <CenteredCard anime={"golgo13"}>
          <h3>2° Golgo 13 - 300 milhões</h3>
          <p>
            <span>Autor:</span> Takao Saito
          </p>
        </CenteredCard>
        <CenteredCard anime={"dragonBall"}>
          <h3>3° Dragon Ball - 250 milhões</h3>
          <p>
            <span>Autor:</span> Akira Toriyama
          </p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
