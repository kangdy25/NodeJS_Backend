function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase());
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("GO PLAY GAME");
    } else {
      reject(new Error("DON'T"));
    }
  });
}

// 좋은 Promise 사용 방식
myWork("done").then(function (result) {
  playGame(result).then(function (val) {
    console.log(val);
  });
});

myWork("done").then(playGame).then(console.log);
