// main javascript for the checkScores.html page.

// the divs for which the scores are meant to be displayed to.
let topScore = document.getElementById("topScore");
let allScores = document.getElementById("allScores");

// creates a h3 containing all of the usernames and scores
// associated with the game speedBall.
let printAllScores = (username, score) => {
  let h3 = document.createElement("h3");
  h3.append(`${username} -> ${score}`);
  allScores.append(h3);
};

// prints a h3 element with the top speedBall score.
let printTopScore = (highestScore) => {
  let h3 = document.createElement("h3");
  h3.append(`${highestScore}`);
  topScore.append(h3);
};

// gets the top score from all of the game sessions from getSpeedBallSessions
// and sends top score to printTopScore
let topSpeedBallSession = (allGameSessions) => {
  let currentHighScore = 0;
  let highestScore;
  Object.entries(allGameSessions).forEach(([key, value]) => {
    // console.log(`${value.username} ${value.score}`);
    if (value.numScore > currentHighScore) {
      currentHighScore = value.numScore;
      highestScore = `${value.username} -> ${value.numScore}`;
    }
  });
  printTopScore(highestScore);
};

// gets all game sessions associated with speedBall
//  and sends them to printAllScores
let getSpeedBallSessions = (allGameSessions) => {
  for (let session in allGameSessions) {
    if (allGameSessions[session].game == "speedBall") {
      printAllScores(
        allGameSessions[session].username,
        allGameSessions[session].numScore
      );
    }
  }
};

// sends a fetch request to the gameScoreServer i have hosted on heroku.
// than sends the response to getSpeedBallSessions and topSpeedBallSessions
let getGameSessions = () => {
  try {
    fetch("https://resting-node.herokuapp.com/gameSessions")
      .then((res) => res.json())
      .then((json) => {
        getSpeedBallSessions(json);
        topSpeedBallSession(json);
      });
  } catch (error) {
    console.log("game sessions could not be found");
  }
};

// calls getGameSessions when the window is loaded.
window.onload = getGameSessions;
