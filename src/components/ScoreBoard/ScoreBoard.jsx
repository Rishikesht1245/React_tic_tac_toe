import "./score.css";
const ScoreBoard = ({ xScore, oScore, tie, playing }) => {
  return (
    <div className="scoreboard">
      <span className={`x-score ${playing ? "xPlay" : ""}`}>X - {xScore}</span>
      <span className={`o-score ${playing ? "" : "oPlay"}`}>O - {oScore}</span>
      <span className="tie-score">Tie - {tie}</span>
    </div>
  );
};
export default ScoreBoard;
