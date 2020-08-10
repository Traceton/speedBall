let top5 = document.getElementById("top5");
let allScores = document.getElementById("allScores");

let printAllScores = async (username, score) => {
  let h3 = document.createElement("h3");
  h3.append(`${username} -> ${score}`);
  allScores.append(h3);
};

let printTop5Scores = () => {};

let getSpeedBallSessions = (allGameSessions) => {
  for (let session in allGameSessions) {
    printAllScores(
      allGameSessions[session].username,
      allGameSessions[session].score
    );
  }
};

let getGameSessions = () => {
  try {
    fetch("https://gamescoreserver.herokuapp.com/gameSessions")
      .then((res) => res.json())
      .then((json) => {
        getSpeedBallSessions(json);
      });
  } catch (error) {
    console.log("game sessions could not be found");
  }
};

window.onload = getGameSessions;
