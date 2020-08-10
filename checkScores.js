let topScore = document.getElementById("topScore");
let allScores = document.getElementById("allScores");

let printAllScores = async (username, score) => {
  let h3 = document.createElement("h3");
  h3.append(`${username} -> ${score}`);
  allScores.append(h3);
};

let printTopScore = async (highestScore) => {
  let h3 = document.createElement("h3");
  h3.append(`${highestScore}`);
  topScore.append(h3);
};

let topSpeedBallSession = (allGameSessions) => {
  let currentHighScore = 0;
  let highestScore;
  Object.entries(allGameSessions).forEach(([key, value]) => {
    // console.log(`${value.username} ${value.score}`);
    if (value.score > currentHighScore) {
      currentHighScore = value.score;
      highestScore = `${value.username} -> ${value.score}`;
    }
  });
  printTopScore(highestScore);
};

let getSpeedBallSessions = (allGameSessions) => {
  for (let session in allGameSessions) {
    if (allGameSessions[session].game == "speedBall") {
      printAllScores(
        allGameSessions[session].username,
        allGameSessions[session].score
      );
    }
  }
};

let getGameSessions = () => {
  try {
    fetch("https://gamescoreserver.herokuapp.com/gameSessions")
      .then((res) => res.json())
      .then((json) => {
        getSpeedBallSessions(json);
        topSpeedBallSession(json);
      });
  } catch (error) {
    console.log("game sessions could not be found");
  }
};

window.onload = getGameSessions;
